import { makeStyles, styled, TableRow, Theme } from '@material-ui/core';

import { firstPlace, secondPlace, thirdPlace } from 'common/models/colors';

const getPercentBetweenOneAndTen = (
  currentScore: number,
  firstPlaceScore: number,
  tenthPlaceScore: number
) => {
  const percentageOfFirst = Math.floor(
    ((currentScore - tenthPlaceScore) * 100) /
      (firstPlaceScore - tenthPlaceScore)
  );

  if (percentageOfFirst < 4) {
    return 4;
  }

  return percentageOfFirst;
};

interface StyledTableRowProps {
  bgcolor: string;
  first: number;
  tenth: number;
  score: number;
  position: number;
}

export const StyledTableRow = styled(TableRow)({
  background: (props: StyledTableRowProps) => {
    let bgColor = `${props.bgcolor}1a`;

    if (props.position === 1) {
      bgColor = `${firstPlace}1a`;
    } else if (props.position === 2) {
      bgColor = `${secondPlace}44`;
    } else if (props.position === 3) {
      bgColor = `${thirdPlace}1a`;
    }

    return `linear-gradient(to right, ${bgColor} ${getPercentBetweenOneAndTen(
      props.score,
      props.first,
      props.tenth
    )}%, #ffffff 0%)`;
  }
});

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
