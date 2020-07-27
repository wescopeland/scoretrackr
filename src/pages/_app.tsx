import { CssBaseline, ThemeProvider } from '@material-ui/core';
import App, { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { appWithTranslation } from '~/i18n';
import configureStore from '~/state/store';
import theme from '~/theme';

const store = configureStore();

const myApp = ({ Component, pageProps }: AppProps) => {
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

      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <CssBaseline />
          <Component {...pageProps} />
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
};

myApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const defaultProps = appContext.Component.defaultProps;

  // See: https://github.com/isaachinman/next-i18next/issues/652#issuecomment-644618517
  // This is to enable support for `getServerSideProps()`.
  return {
    ...appProps,
    pageProps: {
      namespacesRequired: [
        ...(appProps.pageProps.namespacesRequired || []),
        ...(defaultProps?.i18nNamespaces || [])
      ]
    }
  };
};

export default appWithTranslation(myApp);
