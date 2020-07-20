import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles<Theme, any>((theme: Theme) => ({
  appName: {
    letterSpacing: '1rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingBottom: '0.5rem',

    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem',
      letterSpacing: '0.5rem',
      paddingBottom: 0
    }
  },

  description: {
    letterSpacing: '0.1rem',
    textAlign: 'center',

    [theme.breakpoints.only('xs')]: {
      display: 'none'
    }
  }
}));
