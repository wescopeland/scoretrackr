import { makeStyles, styled, TableRow, Theme } from '@material-ui/core';

import { firstPlace, secondPlace, thirdPlace } from '~/models/colors';

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

// These are all lowercase because React propagates these to
// inner standard HTML elements, which causes an error to be thrown.
interface StyledTableRowProps {
  bgcolor: string;
  first: number;
  tenth: number;
  score: number;
  position: number;
  islightmode: string;
  surfacecolor: string;
}

export const StyledTableRow = styled(TableRow)({
  background: (props: StyledTableRowProps) => {
    const isLightMode = props.islightmode === 'true';

    let bgColor = isLightMode ? `${props.bgcolor}1a` : `${props.bgcolor}aa`;

    if (props.position === 1) {
      bgColor = isLightMode ? `${firstPlace}1a` : `${firstPlace}77`;
    } else if (props.position === 2) {
      bgColor = `${secondPlace}44`;
    } else if (props.position === 3) {
      bgColor = isLightMode ? `${thirdPlace}1a` : `${thirdPlace}77`;
    }

    return `linear-gradient(to right, ${bgColor} ${getPercentBetweenOneAndTen(
      props.score,
      props.first,
      props.tenth
    )}%, ${props.surfacecolor} 0%)`;
  }
});

export const useStyles = makeStyles<Theme, any>((theme: Theme) => ({
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
