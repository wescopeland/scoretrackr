import { ThemeProvider } from '@material-ui/styles';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import App from 'client/App';
import theme from 'client/theme';

interface ServerAppProps {
  i18n: any;
  currentUrl: string | object;
  gqlClient: GraphQLClient;
  store: any;
}

export const ServerApp = ({
  i18n,
  currentUrl,
  gqlClient,
  store
}: ServerAppProps) => {
  return (
    <ClientContext.Provider value={gqlClient}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <ReduxProvider store={store}>
            <StaticRouter context={{}} location={currentUrl}>
              <App />
            </StaticRouter>
          </ReduxProvider>
        </I18nextProvider>
      </ThemeProvider>
    </ClientContext.Provider>
  );
};
