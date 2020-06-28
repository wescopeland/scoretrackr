import { Toolbar } from '@material-ui/core';
import { useQuery } from 'graphql-hooks';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useParams } from 'react-router-dom';

import {
  GameNavBar,
  GameSidenav,
  GameTracksBar,
  LeaderboardOutlet
} from '../../../components/game';
import { selectActiveGameState } from '../../../state/active-game';
import { Game } from '@scoretrackr/data-access-entities';
import { GetActiveGameDetails } from '@scoretrackr/data-access-gql-queries';
import { useStyles } from './GamePage.styles';

export const GamePage = () => {
  const { friendlyId } = useParams();

  const { loading, error, data } = useQuery<{ game: Game }>(
    GetActiveGameDetails,
    {
      variables: {
        id: friendlyId
      }
    }
  );

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
