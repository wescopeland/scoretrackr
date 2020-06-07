import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { GamePage } from './pages/game/[friendlyId]/index';
import { HomePage } from './pages/index';

const App = () => (
  <>
    <CssBaseline />

    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/game/:friendlyId" component={GamePage} />
    </Switch>
  </>
);

export default App;
