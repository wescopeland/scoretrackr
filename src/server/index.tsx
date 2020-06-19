// tslint:disable: no-var-requires

import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import fs from 'fs';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
import { getInitialState } from 'graphql-hooks-ssr';
import Backend from 'i18next-fs-backend';
import fetch from 'isomorphic-unfetch';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';

import App from 'client/App';
import i18n from 'client/i18n';
import configureStore from 'client/state/store';
import theme from 'client/theme';
import { i18nNamespaces } from 'common/models/i18n-namespaces';
import ping from './api/ping';
import { gqlResolvers } from './gql-resolvers';
import { gqlSchema } from './gql-schema';

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) =>
  path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('src');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const i18nextMiddleware = require('i18next-http-middleware');

const server = express();

const apollo = new ApolloServer({
  typeDefs: gqlSchema,
  resolvers: gqlResolvers,
  introspection: true
});

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      debug: false,
      preload: ['en', 'jp'],
      ns: i18nNamespaces,
      defaultNS: 'common',
      backend: {
        loadPath: `${appSrc}/client/locales/{{lng}}/{{ns}}.json`,
        addPath: `${appSrc}/client/locales/{{lng}}/{{ns}}.missing.json`
      },
      react: {
        useSuspense: false
      }
    },
    () => {
      server
        .disable('x-powered-by')

        // compression
        .use(
          expressStaticGzip(process.env.RAZZLE_PUBLIC_DIR, {
            enableBrotli: true,
            orderPreference: ['br', 'gz']
          })
        )

        // i18n
        .use(i18nextMiddleware.handle(i18n))
        .use('/locales', express.static(`${appSrc}/client/locales`))

        // static files
        .use(express.static(process.env.RAZZLE_PUBLIC_DIR))

        // api routes
        .use('/api/ping', ping)

        // ui content delivery
        .get(/^(?!\/api\/)/, async (req, res) => {
          // GraphQL Hooks
          const serverBaseUrl =
            process.env.NODE_ENV === 'development'
              ? 'http://127.0.0.1:3000'
              : 'https://scoretrac.kr';

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

          const ServerApp = (
            <ClientContext.Provider value={gqlClient}>
              <ThemeProvider theme={theme}>
                <I18nextProvider i18n={(req as any).i18n}>
                  <ReduxProvider store={store}>
                    <StaticRouter context={context} location={req.url}>
                      <App />
                    </StaticRouter>
                  </ReduxProvider>
                </I18nextProvider>
              </ThemeProvider>
            </ClientContext.Provider>
          );

          // GraphQL Hooks
          const initialGqlState = await getInitialState({
            App: ServerApp,
            client: gqlClient
          });

          const markup = renderToString(sheets.collect(ServerApp));

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
                    )}');
                    
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

      apollo.applyMiddleware({ app: server, path: '/api/graphql' });
    }
  );

export default server;
