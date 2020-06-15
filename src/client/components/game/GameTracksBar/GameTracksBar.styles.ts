import { makeStyles, Theme } from '@material-ui/core';

import { gameDrawerWidth } from 'common/models/game-drawer-width';

interface StyleProps {
  gameColor: string;
  isDesktopSidenavOpen: boolean;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  appBar: (props) => ({
    background: `${props.gameColor}`,

    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),

    width: props.isDesktopSidenavOpen
      ? `calc(100vw - ${gameDrawerWidth}px)`
      : '100vw',

    [theme.breakpoints.down('sm')]: {
      width: '100vw'
    }
  })
}));
