import React, { useEffect } from 'react';
import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { ClientContext } from 'graphql-hooks';
import { Provider as ReduxProvider } from 'react-redux';

import { appWithTranslation } from '~/i18n';
import theme from '~/theme';
import configureStore from '~/state/store';
import { useGraphQLClient } from '~/lib/graphql-client';

const store = configureStore();

const myApp = ({ Component, pageProps }: AppProps) => {
  const graphQLClient = useGraphQLClient(pageProps.initialGraphQLState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Scoretrackr</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ClientContext.Provider value={graphQLClient}>
        <ThemeProvider theme={theme}>
          <ReduxProvider store={store}>
            <CssBaseline />
            <Component {...pageProps} />
          </ReduxProvider>
        </ThemeProvider>
      </ClientContext.Provider>
    </>
  );
};

myApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(myApp);
