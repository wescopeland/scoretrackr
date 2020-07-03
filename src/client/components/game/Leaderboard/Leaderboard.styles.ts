import { makeStyles, styled, TableRow, Theme } from '@material-ui/core';

interface StyledTableRowProps {
  bgcolor: string;
  first: number;
  tenth: number;
  score: number;
}

const getPercentBetweenOneAndTen = (
  currentScore: number,
  firstPlace: number,
  tenthPlace: number
) => {
  const percentageOfFirst = Math.floor(
    ((currentScore - tenthPlace) * 100) / (firstPlace - tenthPlace)
  );

  if (percentageOfFirst < 4) {
    return 4;
  }

  return percentageOfFirst;
};

export const StyledTableRow = styled(TableRow)({
  background: (props: StyledTableRowProps) => {
    return `linear-gradient(to right, ${
      props.bgcolor
    }1a ${getPercentBetweenOneAndTen(
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
  }
}));
