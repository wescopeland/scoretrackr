import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles<Theme, any>((theme: Theme) => ({
  button: {
    padding: '6px 12px'
  },

  icon: {
    color: 'white',
    opacity: 0.7
  }
}));
