// tslint:disable: no-var-requires

import { ServerStyleSheets } from '@material-ui/styles';
import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import fs from 'fs';
import { GraphQLClient } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
import { getInitialState } from 'graphql-hooks-ssr';
import Backend from 'i18next-fs-backend';
import fetch from 'isomorphic-unfetch';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

import i18n from 'client/i18n';
import configureStore from 'client/state/store';
import { createApiServer } from './api-server';
import verifyEmail from './api/auth/verify-email';
import ping from './api/ping';
import { compression } from './express/compression';
import { getI18nSsrConfig } from './express/i18n-ssr-config';
import { ServerApp } from './express/ServerApp';
import './passport';

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) =>
  path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('src');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const i18nextMiddleware = require('i18next-http-middleware');

const server = express();

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(getI18nSsrConfig(appSrc), async () => {
    server
      .disable('x-powered-by')
      .use(compression())

      // auth
      .use(
        session({
          secret: process.env.AUTH_SESSION_SECRET,
          resave: false,
          saveUninitialized: true,
          cookie: {
            secure: process.env.NODE_ENV === 'production',
            maxAge: 4 * 60 * 60 * 1000
          }
        })
      )
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(passport.initialize())

      // i18n
      .use(i18nextMiddleware.handle(i18n))
      .use('/locales', express.static(`${appSrc}/client/locales`))

      // static files
      .use(express.static(process.env.RAZZLE_PUBLIC_DIR))

      // api routes
      .use('/api/ping', ping)
      .post('/api/auth/verify-email', verifyEmail)
      .post(
        '/api/auth/register',
        passport.authenticate('signup', { session: false }),
        async (req, res, next) => {
          res.json({
            message: 'Registration successful',
            user: req.user
          });
        }
      )
      .post('/api/auth/login', async (req, res, next) => {
        passport.authenticate('login', async (err, user, info) => {
          try {
            if (err || !user) {
              const error = new Error('Unexpected error');
              return next(error);
            }

            req.login(user, { session: false }, async (error) => {
              if (error) return next(error);

              // We don't want to store the sensitive information such
              // as the user password in the token, so we pick only the
              // email and id.
              const body = {
                id: user.id,
                email: user.email,
                username: user.username
              };

              // Sign the JWT token and populate the payload with the user
              // email and user id.
              const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

              // Send the token to the user.
              return res.json({ token });
            });
          } catch (err) {
            return next(err);
          }
        })(req, res, next);
      })

      // ui content delivery
      // handle all non-api routes
      .get(/^(?!\/api\/)/, async (req, res) => {
        // GraphQL Hooks
        const serverBaseUrl =
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:3000'
            : 'https://www.scoretrac.kr';

        const gqlClient = new GraphQLClient({
          url: `${serverBaseUrl}/api/graphql`,
          cache: memCache(),
          fetch
        });

        // Material UI CSS-in-JS
        const sheets = new ServerStyleSheets();
        const context = {};

        // i18next
        (globalThis as any).initialLanguage = (req as any).i18n.language;

        // Redux
        const store = configureStore();

        const ui = (
          <ServerApp
            i18n={(req as any).i18n}
            currentUrl={req.url}
            gqlClient={gqlClient}
            store={store}
          />
        );

        // GraphQL Hooks
        const initialGqlState = await getInitialState({
          App: ui,
          client: gqlClient
        });

        const markup = renderToString(sheets.collect(ui));

        // Redux
        const finalState = store.getState();

        // Material UI CSS-in-JS
        const css = sheets.toString();

        // i18next
        const { url }: any = context;
        if (url) {
          res.redirect(url);
        } else {
          const initialI18nStore = {};
          (req as any).i18n.languages.forEach((lang: string) => {
            initialI18nStore[
              lang
            ] = (req as any).i18n.services.resourceStore.data[lang];
          });

          res.status(200).send(`
            <!doctype html>
              <html lang=${(req as any).i18n.language}>
              <head>
                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta charset="utf-8" />

                  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500">

                  <title>Scoretrac.kr</title>

                  <meta name="viewport" content="width=device-width">
                  ${
                    assets.client.css
                      ? `<link rel="stylesheet" href="${assets.client.css}">`
                      : ''
                  }
                  ${css ? `<style id='jss-ssr'>${css}</style>` : ''}
                  ${
                    process.env.NODE_ENV === 'production'
                      ? `<script src="${assets.client.js}" defer></script>`
                      : `<script src="${assets.client.js}" defer crossorigin></script>`
                  }

                  <link
                    rel="stylesheet"
                    crossOrigin="anonymous"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css"
                  />

                  <script>
                    window.initialI18nStore = JSON.parse('${JSON.stringify(
                      initialI18nStore
                    ).replace(/[\/\(\)\']/g, '\\$&')}');
                    
                    window.initialLanguage = '${
                      (globalThis as any).initialLanguage
                    }';

                    window.preloadedReduxState = ${serialize(finalState)}
                  </script>
              </head>
              <body>
                  <div id="root">${markup}</div>

                  <script type="text/javascript">
                    window.__INITIAL_GQL_STATE__=${JSON.stringify(
                      initialGqlState
                    ).replace(/</g, '\\u003c')};
                  </script>
              </body>
            </html>
          `);
        }
      });

    const apollo = await createApiServer();
    apollo.applyMiddleware({ app: server, path: '/api/graphql' });
  });

export default server;
