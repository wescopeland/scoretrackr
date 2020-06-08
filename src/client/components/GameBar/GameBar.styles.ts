import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles<Theme, any>((theme: Theme) => ({
  root: {
    height: 64,
    padding: '1rem',
    backgroundColor: `${
      theme.palette.type === 'light' ? '#f3f1ec' : '#1f1f1f'
    }`,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    zIndex: theme.zIndex.drawer + 1
  }
}));
