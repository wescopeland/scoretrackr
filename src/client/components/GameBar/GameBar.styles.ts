import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles<Theme, any>((theme: Theme) => ({
  root: {
    height: 64,
    padding: '1rem',
    backgroundColor: `${
      theme.palette.type === 'light' ? '#f3f1ec' : '#1f1f1f'
    }`,
    boxShadow: 'none',
    borderBottom: `${
      theme.palette.type === 'light' ? '1px solid #d2d9d9' : '1px solid #444'
    }`
  }
}));
