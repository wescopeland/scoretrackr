import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { hydrate } from 'react-dom';
import { useSSR } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './i18n';
import theme from './theme';

const ClientApp = () => {
  useSSR((window as any).initialI18nStore, (window as any).initialLanguage);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
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
