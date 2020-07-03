import { Toolbar } from '@material-ui/core';
import { useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useParams } from 'react-router-dom';

import {
  GameNavBar,
  GameSidenav,
  GameTracksBar,
  LeaderboardOutlet
} from 'client/components/game';
import {
  activeGameActions,
  selectActiveGameState
} from 'client/state/active-game';
import { Game } from 'common/entities';
import GetActiveGameDetails from 'common/queries/get-active-game-details.graphql';
import { useStyles } from './GamePage.styles';

export const GamePage = () => {
  const { friendlyId } = useParams();
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery<{ game: Game }>(
    GetActiveGameDetails,
    {
      variables: {
        id: friendlyId
      }
    }
  );

  useEffect(() => {
    if (data?.game) {
      dispatch(
        activeGameActions.setGameDetails({
          color: data.game.color,
          name: data.game.name
        })
      );
    }
  }, [data]);

  const activeGameState = useSelector(selectActiveGameState);
  const { content, toolBar } = useStyles({
    isDesktopSidenavOpen: activeGameState.isDesktopSidenavOpen
  });

  return (
    <div className="d-flex">
      <GameNavBar
        gameColor={data?.game.color}
        gameName={data?.game.name}
        isLoading={loading}
      />

      <GameSidenav />

      <main className={content}>
        <Toolbar className={toolBar} />
        <GameTracksBar
          gameColor={data?.game.color}
          tracks={data?.game.tracks}
          isLoading={loading}
        />

        {activeGameState.selectedTrackId && (
          <Route path="/game/:friendlyId" component={LeaderboardOutlet} />
        )}
      </main>
    </div>
  );
};
