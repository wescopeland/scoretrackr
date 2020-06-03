// tslint:disable: no-var-requires

import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import express from 'express';
import fs from 'fs';
import Backend from 'i18next-fs-backend';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';

import configureStore from 'state/store';
import App from '../App';
import i18n from '../i18n';
import theme from '../theme';
import ping from './api/ping';
import recentSubmissions from './api/submissions/recent';

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
  .init(
    {
      debug: false,
      preload: ['en', 'jp'],
      ns: ['common'],
      defaultNS: 'common',
      backend: {
        loadPath: `${appSrc}/locales/{{lng}}/{{ns}}.json`,
        addPath: `${appSrc}/locales/{{lng}}/{{ns}}.missing.json`
      },
      react: {
        useSuspense: false
      }
    },
    () => {
      server
        .disable('x-powered-by')

        // i18n
        .use(i18nextMiddleware.handle(i18n))
        .use('/locales', express.static(`${appSrc}/locales`))

        // static files
        .use(express.static(process.env.RAZZLE_PUBLIC_DIR))

        // api routes
        .get('/api/ping', ping)
        .get('/api/submissions/recent', recentSubmissions)

        // ui content delivery
        .get('/*', (req, res) => {
          const sheets = new ServerStyleSheets();
          const context = {};

          (globalThis as any).initialLanguage = (req as any).i18n.language;

          const store = configureStore();

          const markup = renderToString(
            sheets.collect(
              <ThemeProvider theme={theme}>
                <I18nextProvider i18n={(req as any).i18n}>
                  <ReduxProvider store={store}>
                    <StaticRouter context={context} location={req.url}>
                      <App />
                    </StaticRouter>
                  </ReduxProvider>
                </I18nextProvider>
              </ThemeProvider>
            )
          );

          const finalState = store.getState();

          const css = sheets.toString();

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
              <html lang="">
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
              </body>
            </html>
          `);
          }
        });
    }
  );

export default server;
