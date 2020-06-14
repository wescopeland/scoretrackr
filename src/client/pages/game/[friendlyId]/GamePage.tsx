import { makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

import { GameNavBar } from 'client/components/game/GameNavBar';
import { GameSidenav } from 'client/components/game/GameSidenav';
import { GameTracksBar } from 'client/components/game/GameTracksBar';

const useStyles = makeStyles({
  content: {
    flexGrow: 1
  }
});

const tracks: any[] = [
  {
    id: 'NIPFcd4gVJrAbW01TohJ',
    name: 'Factory settings'
  },
  {
    id: 'ax9T0WBflMuu6iaapQEV',
    name: 'No hammer'
  }
];

export const GamePage = () => {
  const { friendlyId, trackId } = useParams();
  const { content } = useStyles();

  return (
    <div className="d-flex">
      <GameNavBar />

      <GameSidenav />

      <main className={content}>
        <Toolbar />
        <GameTracksBar gameColor="#ba3448" tracks={tracks} />
      </main>
    </div>
  );
};
