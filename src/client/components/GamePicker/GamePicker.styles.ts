import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  gameColor: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    height: 32
  },

  gameLetterContainer: (props) => ({
    width: 32,
    backgroundColor: `${props.gameColor}`,
    textAlign: 'center',
    height: '100%',
    display: 'inline-block',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  }),

  gameLetterText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 900,
    padding: 4
  },

  gameNameContainer: {
    display: 'inline-block',
    paddingLeft: '0.5rem',
    paddingRight: '0.75rem'
  },

  gameNameText: {
    fontSize: 16,
    fontWeight: 900
  }
}));
