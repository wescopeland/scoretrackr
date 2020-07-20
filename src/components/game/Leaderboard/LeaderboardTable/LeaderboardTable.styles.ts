import { makeStyles, Theme } from '@material-ui/core';

import { firstPlace, secondPlace, thirdPlace } from '~/models/colors';

export const useStyles = makeStyles<Theme, any>((theme: Theme) => ({
  tableCell: {
    padding: '8px 16px',
    height: 40
  },

  firstPlaceCellBorder: {
    paddingLeft: 12,
    borderLeft: `10px solid ${firstPlace}`
  },

  secondPlaceCellBorder: {
    paddingLeft: 12,
    borderLeft: `10px solid ${secondPlace}`
  },

  thirdPlaceCellBorder: {
    paddingLeft: 12,
    borderLeft: `10px solid ${thirdPlace}`
  }
}));
