import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';

import { GameDrawerToggleButton } from '../GameDrawerToggleButton';
import { LeaderboardTabs } from '../LeaderboardTabs';
import { useStyles } from './GameTracksBar.styles';

interface GameTracksBarProps {
  gameColor: string;
  tracks: any[];
}

export const GameTracksBar = ({ gameColor, tracks }: GameTracksBarProps) => {
  const { appBar } = useStyles({ gameColor });

  return (
    <AppBar className={appBar} position="relative">
      <Toolbar variant="dense">
        <GameDrawerToggleButton {...([] as any)} />
        <LeaderboardTabs gameColor={gameColor} tracks={tracks} />
      </Toolbar>
    </AppBar>
  );
};
