import { Toolbar, makeStyles, Theme } from '@material-ui/core';
import { useQuery } from 'graphql-hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import {
  GameNavBar,
  GameSidenav,
  GameTracksBar,
  LeaderboardOutlet
} from '~/components/game';
import { activeGameActions, selectActiveGameState } from '~/state/active-game';
import { getActiveGameDetails } from '~/queries/get-active-game-details.query';
import { Game } from '~/entities';
import { gameDrawerWidth } from '~/models/game-drawer-width';

interface StyleProps {
  isDesktopSidenavOpen: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  content: (props) => ({
    flexGrow: 1,

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),

    marginLeft: props.isDesktopSidenavOpen ? 'initial' : -gameDrawerWidth, // -260px

    [theme.breakpoints.down('sm')]: {
      marginLeft: 'initial'
    }
  }),

  toolBar: {
    [theme.breakpoints.down('xs')]: {
      minHeight: 54
    }
  }
}));

const GamePage = () => {
  const router = useRouter();
  const { friendlyId } = router.query;

  const dispatch = useDispatch();
  const { loading, error, data } = useQuery<{ game: Game }>(
    getActiveGameDetails,
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

        {activeGameState.selectedTrackId && <LeaderboardOutlet />}
      </main>
    </div>
  );
};

GamePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'game']
});

export default GamePage;
