import { CssBaseline } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
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
