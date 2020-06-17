import { makeStyles, Theme } from '@material-ui/core';

import { gameDrawerWidth } from 'common/models/game-drawer-width';

interface StyleProps {
  gameColor?: string;
  isDesktopSidenavOpen: boolean;
  isLoading: boolean;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  appBar: (props) => ({
    backgroundColor: props.isLoading
      ? `${theme.palette.primary.main}`
      : `${props.gameColor}`,

    transition: theme.transitions.create(['width', 'background-color'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),

    minHeight: 54,

    width: props.isDesktopSidenavOpen
      ? `calc(100vw - ${gameDrawerWidth}px)`
      : '100vw',

    [theme.breakpoints.down('sm')]: {
      width: '100vw'
    }
  }),

  toolBar: {
    minHeight: 54
  }
}));
