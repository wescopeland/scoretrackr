import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { hydrate } from 'react-dom';
import { useSSR } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './i18n';
import configureStore from './state/store';
import theme from './theme';

const store = configureStore((window as any).preloadedReduxState);

const ClientApp = () => {
  useSSR((window as any).initialI18nStore, (window as any).initialLanguage);

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </ThemeProvider>
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
