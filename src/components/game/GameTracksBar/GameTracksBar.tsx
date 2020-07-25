import { AppBar, Toolbar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { activeGameActions, selectActiveGameState } from '~/state/active-game';
import { Track } from '~/entities';
import { GameDrawerToggleButton } from '../GameDrawerToggleButton';
import { TrackTabs } from '../TrackTabs';
import { useStyles } from './GameTracksBar.styles';
import { sortTracks } from './sort-tracks';

interface GameTracksBarProps {
  isLoading: boolean;
  gameColor?: string;
  tracks?: Track[];
}

export const GameTracksBar = ({
  gameColor,
  isLoading,
  tracks
}: GameTracksBarProps) => {
  const dispatch = useDispatch();
  const activeGameState = useSelector(selectActiveGameState);
  const { appBar, toolBar } = useStyles({
    gameColor,
    isLoading,
    isDesktopSidenavOpen: activeGameState.isDesktopSidenavOpen
  });

  const toggleDesktopSidenav = () => {
    dispatch(activeGameActions.toggleIsDesktopSidenavOpen());
  };

  const toggleMobileSidenav = () => {
    dispatch(activeGameActions.toggleIsMobileSidenavOpen());
  };

  const sortedTracks = tracks ? sortTracks(tracks) : null;

  return (
    <AppBar className={appBar} position="relative">
      <Toolbar className={toolBar}>
        <GameDrawerToggleButton
          onDesktopClick={toggleDesktopSidenav}
          onMobileClick={toggleMobileSidenav}
          isMobileSidenavOpen={activeGameState.isMobileSidenavOpen}
        />

        {isLoading ? (
          <Skeleton
            data-testid="track-tabs-loading"
            width="100%"
            height={36}
            variant="rect"
          />
        ) : (
          <TrackTabs gameColor={gameColor} tracks={sortedTracks} />
        )}
      </Toolbar>
    </AppBar>
  );
};