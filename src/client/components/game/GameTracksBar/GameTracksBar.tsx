import { AppBar, Toolbar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  activeGameActions,
  selectIsDesktopSidenavOpen,
  selectIsMobileSidenavOpen
} from 'client/state/active-game';
import { Track } from 'common/models/track.model';
import { GameDrawerToggleButton } from '../GameDrawerToggleButton';
import { TrackTabs } from '../TrackTabs';
import { useStyles } from './GameTracksBar.styles';

interface GameTracksBarProps {
  gameColor: string;
  isLoading: boolean;
  tracks: Track[];
}

export const GameTracksBar = ({
  gameColor,
  isLoading,
  tracks
}: GameTracksBarProps) => {
  const dispatch = useDispatch();
  const isDesktopSidenavOpen = useSelector(selectIsDesktopSidenavOpen);
  const isMobileSidenavOpen = useSelector(selectIsMobileSidenavOpen);
  const { appBar, toolBar } = useStyles({
    gameColor,
    isDesktopSidenavOpen,
    isLoading
  });

  const toggleDesktopSidenav = () => {
    dispatch(activeGameActions.toggleIsDesktopSidenavOpen());
  };

  const toggleMobileSidenav = () => {
    dispatch(activeGameActions.toggleIsMobileSidenavOpen());
  };

  return (
    <AppBar className={appBar} position="relative">
      <Toolbar className={toolBar}>
        <GameDrawerToggleButton
          onDesktopClick={toggleDesktopSidenav}
          onMobileClick={toggleMobileSidenav}
          isMobileSidenavOpen={isMobileSidenavOpen}
        />
        {isLoading ? (
          <Skeleton
            data-testid="track-tabs-loading"
            width="100%"
            height={36}
            variant="rect"
          />
        ) : (
          <TrackTabs gameColor={gameColor} tracks={tracks} />
        )}
      </Toolbar>
    </AppBar>
  );
};
