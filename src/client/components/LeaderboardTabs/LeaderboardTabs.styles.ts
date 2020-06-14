import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  gameColor: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  loadingBar: (props) => ({
    height: 54,
    background: `${props.gameColor}`,
    boxShadow: '0px 3px 15px rgba(34, 35, 58, 0.5)'
  }),

  tabsRoot: (props) => ({
    width: '100%',
    height: 54,
    background: `${props.gameColor}`,
    padding: 10
  }),
  tabsIndicator: {
    height: '100%',
    borderRadius: theme.spacing(1),
    backgroundColor: 'rgba(255, 255, 255, .2)'
  },

  tabItemRoot: {
    textTransform: 'initial',
    margin: `0 ${theme.spacing(2)}px`,
    minWidth: 0,
    minHeight: 'initial',
    fontWeight: 'normal',
    letterSpacing: 0.5,
    color: theme.palette.common.white,

    [theme.breakpoints.up('md')]: {
      minWidth: 0
    }
  },

  menuButton: {
    color: 'white',
    opacity: 0.7
  }
}));
