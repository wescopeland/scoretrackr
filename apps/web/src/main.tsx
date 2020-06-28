import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import { AppProviders } from './app/AppProviders';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
);
