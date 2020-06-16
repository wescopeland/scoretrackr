import { Toolbar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { GameNavBar } from 'client/components/game/GameNavBar';
import { GameSidenav } from 'client/components/game/GameSidenav';
import { GameTracksBar } from 'client/components/game/GameTracksBar';
import { selectIsDesktopSidenavOpen } from 'client/state/active-game';
import { useStyles } from './GamePage.styles';

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
  const isDesktopSidenavOpen = useSelector(selectIsDesktopSidenavOpen);
  const { content, toolBar } = useStyles({ isDesktopSidenavOpen });

  return (
    <div className="d-flex">
      <GameNavBar />

      <GameSidenav />

      <main className={content}>
        <Toolbar className={toolBar} />
        <GameTracksBar gameColor="#ba3448" tracks={tracks} />
      </main>
    </div>
  );
};
