import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppBar } from 'client/components/AppBar';
import { Header } from 'client/components/Header';
import { GamePage } from './pages/game/[friendlyId]/index';
import { HomePage } from './pages/index';

const App = () => (
  <>
    <CssBaseline />

    <Header />
    <AppBar />

    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/game/:friendlyId" component={GamePage} />
    </Switch>
  </>
);

export default App;
