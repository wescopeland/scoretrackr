import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  isLoading: boolean;
  gameColor?: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    height: 32
  },

  gameLetterContainer: (props) => ({
    width: 32,

    backgroundColor: props.isLoading
      ? `${theme.palette.primary.main}`
      : `${props.gameColor}`,

    transition: theme.transitions.create('background-color', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard
    }),

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

  gameNameContainer: (props) => ({
    display: 'inline-block',
    paddingLeft: '0.5rem',
    paddingRight: '0.75rem'
  }),

  gameNameText: {
    fontSize: 16,
    fontWeight: 900
  },

  loadingSkeleton: {
    // There's some weirdness here due to
    // the game letter not being initially visible.
    position: 'relative',
    top: -6
  }
}));
