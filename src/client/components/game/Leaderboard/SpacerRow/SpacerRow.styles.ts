import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles<Theme, any>((theme: Theme) => ({
  tableCell: {
    backgroundColor: theme.palette.background.default
  }
}));
