import { Drawer, Toolbar } from '@material-ui/core';
import React from 'react';

import { useStyles } from './GameSidenav.styles';

export const GameSidenav = () => {
  const { drawer, drawerContainer, drawerPaper } = useStyles();

  return (
    <>
      <Drawer
        className={drawer}
        variant="permanent"
        classes={{ paper: drawerPaper }}
      >
        <Toolbar />
        <div className={drawerContainer} />
      </Drawer>
    </>
  );
};
