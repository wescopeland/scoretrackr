import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { GamePage } from './pages/game/[friendlyId]/GamePage';
import { HomePage } from './pages/HomePage';
import './i18n';

const App = () => {
  return (
    <>
      <CssBaseline />

      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/game/:friendlyId" component={GamePage} />
      </Switch>
    </>
  );
};

export default App;
