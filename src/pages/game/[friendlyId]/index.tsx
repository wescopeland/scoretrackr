import { makeStyles, Theme, Toolbar } from '@material-ui/core';
import { GameGetPayload } from '@prisma/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';

import {
  GameNavBar,
  GameSidenav,
  GameTracksBar,
  LeaderboardOutlet
} from '~/components/game';
import { gameDrawerWidth } from '~/models/game-drawer-width';
import { activeGameActions, selectActiveGameState } from '~/state/active-game';

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

const fetcher = (url) =>
  fetch(url).then(
    (res) =>
      (res.json() as unknown) as GameGetPayload<{ include: { tracks: true } }>
  );

const GamePage = () => {
  const router = useRouter();
  const { friendlyId } = router.query;
  const dispatch = useDispatch();

  const { data, error } = useSWR(`/api/game/${friendlyId}`, fetcher);

  useEffect(() => {
    if (data) {
      dispatch(
        activeGameActions.setGameDetails({
          color: data.color,
          name: data.name
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
        gameColor={data?.color}
        gameName={data?.name}
        isLoading={!data}
      />

      <GameSidenav />

      <main className={content}>
        <Toolbar className={toolBar} />
        <GameTracksBar
          gameColor={data?.color}
          tracks={data?.tracks}
          isLoading={!data}
        />

        {activeGameState.selectedTrackId && <LeaderboardOutlet />}
      </main>
    </div>
  );
};

GamePage.defaultProps = {
  i18nNamespaces: ['common', 'game']
};

export default GamePage;
