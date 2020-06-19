import { ThemeProvider } from '@material-ui/styles';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
import React from 'react';
import { hydrate } from 'react-dom';
import { useSSR } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './i18n';
import configureStore from './state/store';
import theme from './theme';

const initialGqlState = (window as any).__INITIAL_GQL_STATE__;

const gqlClient = new GraphQLClient({
  url: '/api/graphql',
  cache: memCache({ initialState: initialGqlState })
});

const store = configureStore((window as any).preloadedReduxState);

const ClientApp = () => {
  useSSR((window as any).initialI18nStore, (window as any).initialLanguage);

  return (
    <ClientContext.Provider value={gqlClient}>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReduxProvider>
      </ThemeProvider>
    </ClientContext.Provider>
  );
};

hydrate(<ClientApp />, document.getElementById('root'), () => {
  // Material UI Rehydration: https://github.com/cssinjs/jss/blob/master/docs/ssr.md
  const jssStyles = document.getElementById('jss-ssr');
  if (jssStyles && jssStyles.parentNode)
    jssStyles.parentNode.removeChild(jssStyles);
});

if (module.hot) {
  module.hot.accept();
}
