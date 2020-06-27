import { ThemeProvider } from '@material-ui/core';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme';
import configureStore from './state/store';

const gqlClient = new GraphQLClient({
  url: 'http://localhost:4000/graphql'
});

const store = configureStore();

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ClientContext.Provider value={gqlClient}>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <BrowserRouter>{children}</BrowserRouter>
        </ReduxProvider>
      </ThemeProvider>
    </ClientContext.Provider>
  );
};
