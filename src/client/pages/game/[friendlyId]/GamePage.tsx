import { makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

import { GameBar } from 'client/components/GameBar';
import { GameSidenav } from 'client/components/GameSidenav';

const useStyles = makeStyles({
  content: {
    flexGrow: 1
  }
});

export const GamePage = () => {
  const { friendlyId } = useParams();
  const classes = useStyles();

  return (
    <div className="d-flex">
      <GameBar />

      <GameSidenav />

      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
};
