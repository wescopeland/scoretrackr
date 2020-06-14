import { AppBar as MuiAppBar, Toolbar } from '@material-ui/core';
import React from 'react';

export const AppBar = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar variant="dense" />
    </MuiAppBar>
  );
};
