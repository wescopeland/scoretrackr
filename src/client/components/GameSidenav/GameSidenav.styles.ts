import { makeStyles, Theme } from '@material-ui/core';

const drawerWidth = 260;

export const useStyles = makeStyles<Theme, any>((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default
  },

  drawerContainer: {
    overflow: 'auto'
  }
}));
