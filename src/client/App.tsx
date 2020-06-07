import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from './pages/index';

const App = () => (
  <>
    <CssBaseline />
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
    </Switch>
  </>
);

export default App;
