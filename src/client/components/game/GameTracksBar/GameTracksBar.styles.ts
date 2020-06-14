import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  gameColor: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  appBar: (props) => ({
    background: `${props.gameColor}`,

    [theme.breakpoints.up('sm')]: {
      // 260px is the width of the game sidenav.
      maxWidth: 'calc(100vw - 260px)'
    }
  })
}));
