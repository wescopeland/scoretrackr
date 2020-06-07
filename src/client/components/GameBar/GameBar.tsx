import { AppBar } from '@material-ui/core';
import React from 'react';

import { GamePicker } from 'client/components/GamePicker';
import { useStyles } from './GameBar.styles';

export const GameBar = () => {
  const { root } = useStyles();

  return (
    <AppBar color="inherit" className={root}>
      <div className="container-fluid pl-0 pr-0">
        <div className="d-flex">
          <GamePicker gameColor={'#ba3448'} gameName={'Donkey Kong'} />
        </div>
      </div>
    </AppBar>
  );
};
