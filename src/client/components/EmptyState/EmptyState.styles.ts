import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles<Theme, any>((theme: Theme) => ({
  smImage: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },

  mdImage: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  headingText: {
    opacity: 0.7,
    fontSize: '0.8rem',
    fontWeight: 700
  }
}));
