import { makeStyles, Theme } from '@material-ui/core';

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

    // 260px is the width of the game sidenav.
    width: props.isDesktopSidenavOpen ? 'calc(100vw - 260px)' : '100vw',

    [theme.breakpoints.down('sm')]: {
      width: '100vw'
    }
  })
}));
