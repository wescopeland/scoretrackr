import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  isDesktopSidenavOpen: boolean;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  content: (props) => ({
    flexGrow: 1,

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),

    // 260px is the width of the game sidenav.
    marginLeft: props.isDesktopSidenavOpen ? 'initial' : -260,

    [theme.breakpoints.down('sm')]: {
      marginLeft: 'initial'
    }
  })
}));
