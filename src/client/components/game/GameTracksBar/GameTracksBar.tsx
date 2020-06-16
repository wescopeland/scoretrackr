import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  activeGameActions,
  selectIsDesktopSidenavOpen,
  selectIsMobileSidenavOpen
} from 'client/state/active-game';
import { Track } from 'client/state/shared-models/track.model';
import { GameDrawerToggleButton } from '../GameDrawerToggleButton';
import { TrackTabs } from '../TrackTabs';
import { useStyles } from './GameTracksBar.styles';

interface GameTracksBarProps {
  gameColor: string;
  tracks: Track[];
}

export const GameTracksBar = ({ gameColor, tracks }: GameTracksBarProps) => {
  const dispatch = useDispatch();
  const isDesktopSidenavOpen = useSelector(selectIsDesktopSidenavOpen);
  const isMobileSidenavOpen = useSelector(selectIsMobileSidenavOpen);
  const { appBar } = useStyles({ gameColor, isDesktopSidenavOpen });

  const toggleDesktopSidenav = () => {
    dispatch(activeGameActions.toggleIsDesktopSidenavOpen());
  };

  const toggleMobileSidenav = () => {
    dispatch(activeGameActions.toggleIsMobileSidenavOpen());
  };

  return (
    <AppBar className={appBar} position="relative">
      <Toolbar variant="dense">
        <GameDrawerToggleButton
          onDesktopClick={toggleDesktopSidenav}
          onMobileClick={toggleMobileSidenav}
          isMobileSidenavOpen={isMobileSidenavOpen}
        />
        <TrackTabs gameColor={gameColor} tracks={tracks} />
      </Toolbar>
    </AppBar>
  );
};
