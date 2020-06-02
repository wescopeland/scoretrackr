import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './Home';

const App = () => (
  <>
    <CssBaseline />
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  </>
);

export default App;
