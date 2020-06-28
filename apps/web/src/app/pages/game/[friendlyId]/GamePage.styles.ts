import { makeStyles, Theme } from '@material-ui/core';

import { gameDrawerWidth } from '@scoretrackr/data-access-common-models';

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
