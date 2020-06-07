import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppBar } from 'client/components/AppBar';
import { Header } from 'client/components/Header';
import { HomePage } from './pages/index';

const App = () => (
  <>
    <CssBaseline />

    <Header />
    <AppBar />

    <Switch>
      <Route exact={true} path="/" component={HomePage} />
    </Switch>
  </>
);

export default App;
