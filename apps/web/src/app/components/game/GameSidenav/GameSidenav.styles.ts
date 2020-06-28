import { makeStyles, Theme } from '@material-ui/core';

import { gameDrawerWidth } from '@scoretrackr/data-access-common-models';

const drawerWidth = gameDrawerWidth;

export const useStyles = makeStyles<Theme, any>((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default
  }
}));
