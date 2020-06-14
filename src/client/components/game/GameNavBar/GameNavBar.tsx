import { AppBar } from '@material-ui/core';
import React from 'react';

import { GamePicker } from '../GamePicker';
import { useStyles } from './GameNavBar.styles';

export const GameNavBar = () => {
  const { root } = useStyles();

  return (
    <AppBar color="inherit" position="fixed" className={root}>
      <div className="container-fluid pl-0 pr-0">
        <div className="d-flex">
          <GamePicker gameColor={'#ba3448'} gameName={'Donkey Kong'} />
        </div>
      </div>
    </AppBar>
  );
};
