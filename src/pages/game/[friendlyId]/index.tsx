import { Toolbar, makeStyles, Theme } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { GameGetPayload } from '@prisma/client';
import useSWR from 'swr';

import {
  GameNavBar,
  GameSidenav,
  GameTracksBar,
  LeaderboardOutlet
} from '~/components/game';
import { activeGameActions, selectActiveGameState } from '~/state/active-game';
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

const fetcher = (url) =>
  fetch(url).then(
    (res) =>
      (res.json() as unknown) as GameGetPayload<{ include: { tracks: true } }>
  );

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { friendlyId } = context.params;

  const data = await fetcher(`http://localhost:3000/api/game/${friendlyId}`);
  return {
    props: { initialData: data }
  };
}

interface GamePageProps {
  initialData: GameGetPayload<{ include: { tracks: true } }>;
}

const GamePage = ({ initialData }: GamePageProps) => {
  const router = useRouter();
  const { friendlyId } = router.query;
  const dispatch = useDispatch();

  const { data, error } = useSWR(`/api/game/${friendlyId}`, fetcher, {
    initialData
  });

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
