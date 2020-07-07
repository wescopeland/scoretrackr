import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { GamePage } from './pages/game/[friendlyId]/GamePage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/login/LoginPage';
import { SignUpPage } from './pages/sign-up/SignUpPage';

const App = () => (
  <>
    <CssBaseline />

    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/game/:friendlyId" component={GamePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/sign-up" component={SignUpPage} />
    </Switch>
  </>
);

export default App;
