import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  gameColor: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  card: (props) => ({
    display: 'flex',
    height: 90,
    borderLeft: `10px solid ${props.gameColor}`
  }),

  cardMedia: {
    height: '100%',
    width: 70,
    display: 'inline-block'
  },

  positionText: {
    fontSize: '1.5rem'
  }
}));
