import { Toolbar } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { GameNavBar } from 'client/components/game/GameNavBar';
import { GameSidenav } from 'client/components/game/GameSidenav';
import { GameTracksBar } from 'client/components/game/GameTracksBar';
import {
  getActiveGameDetails,
  selectActiveGameDetails,
  selectIsActiveGameLoading,
  selectIsDesktopSidenavOpen
} from 'client/state/active-game';
import { useStyles } from './GamePage.styles';

export const GamePage = () => {
  const { friendlyId, trackId } = useParams();
  const dispatch = useDispatch();
  const activeGameDetails = useSelector(selectActiveGameDetails);
  const isDesktopSidenavOpen = useSelector(selectIsDesktopSidenavOpen);
  const isLoading = useSelector(selectIsActiveGameLoading);
  const { content, toolBar } = useStyles({ isDesktopSidenavOpen });

  useEffect(() => {
    dispatch(getActiveGameDetails(friendlyId));
  }, [dispatch]);

  return (
    <div className="d-flex">
      <GameNavBar
        gameColor={activeGameDetails.color}
        gameName={activeGameDetails.name}
        isLoading={isLoading}
      />

      <GameSidenav />

      <main className={content}>
        <Toolbar className={toolBar} />
        <GameTracksBar
          gameColor={activeGameDetails.color}
          tracks={activeGameDetails.tracks}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
};
