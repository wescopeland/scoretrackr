import { makeStyles, Theme } from '@material-ui/core';

interface StyleProps {
  gameColor: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  card: (props) => ({
    display: 'flex',
    height: 90,
    borderLeft: `10px solid ${props.gameColor}`,

    [theme.breakpoints.down('sm')]: {
      height: 'initial'
    }
  }),

  cardMedia: {
    height: '100%',
    width: 70,
    display: 'inline-block',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  cardContentContainer: {
    display: 'flex',
    width: '100%',
    paddingLeft: '4rem',
    paddingRight: '4rem',
    paddingBottom: '1rem !important', // override an annoying MUI style

    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      flexDirection: 'column'
    }
  },

  segmentOne: {
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },

    [theme.breakpoints.down('sm')]: {
      paddingBottom: '0.5rem'
    }
  },

  segmentTwo: {
    [theme.breakpoints.up('md')]: {
      width: '25%'
    }
  },

  segmentThree: {
    [theme.breakpoints.up('md')]: {
      width: '33.333%'
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  segmentTwoOrdinal: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },

  positionTextContainer: {
    alignSelf: 'center',
    textAlign: 'right',
    paddingRight: '2rem',

    [theme.breakpoints.down('sm')]: {
      alignSelf: 'initial',
      textAlign: 'initial',
      paddingRight: 0
    }
  },

  positionText: {
    fontSize: '1.5rem'
  }
}));
