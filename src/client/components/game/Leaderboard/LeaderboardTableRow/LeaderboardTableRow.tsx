import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';

import { Score } from 'common/entities';
import { formatToReadableDate } from 'common/utils/format-to-readable-date';
import { StyledTableRow, useStyles } from './LeaderboardTableRow.styles';

interface LeaderboardTableRowProps {
  activeGameColor: string;
  canShowRowsWithColoredBackgrounds: boolean;
  currentIndex: number;
  currentScore: Score;
  firstPlaceScore: number;
  tenthPlaceScore?: number;
}

export const LeaderboardTableRow = ({
  activeGameColor,
  canShowRowsWithColoredBackgrounds,
  currentIndex,
  currentScore,
  firstPlaceScore,
  tenthPlaceScore
}: LeaderboardTableRowProps) => {
  const {
    firstPlaceCellBorder,
    secondPlaceCellBorder,
    thirdPlaceCellBorder,
    tableCell
  } = useStyles();

  const isColoredBackgroundRow = (rowIndex: number) => {
    return canShowRowsWithColoredBackgrounds && rowIndex <= 9;
  };

  const getColoredLeftBorder = (position: number) => {
    if (position === 1) {
      return firstPlaceCellBorder;
    } else if (position === 2) {
      return secondPlaceCellBorder;
    } else if (position === 3) {
      return thirdPlaceCellBorder;
    }

    return null;
  };

  const RowComponent =
    canShowRowsWithColoredBackgrounds && currentIndex <= 9
      ? StyledTableRow
      : TableRow;

  return (
    <RowComponent
      key={currentScore.id}
      position={currentScore.position}
      bgcolor={
        isColoredBackgroundRow(currentIndex) ? activeGameColor : undefined
      }
      first={isColoredBackgroundRow(currentIndex) ? firstPlaceScore : undefined}
      score={
        isColoredBackgroundRow(currentIndex)
          ? currentScore.finalScore
          : undefined
      }
      tenth={isColoredBackgroundRow(currentIndex) ? tenthPlaceScore : undefined}
    >
      <TableCell
        className={`${tableCell} ${getColoredLeftBorder(
          currentScore.position
        )}`}
      >
        {currentScore.position}
      </TableCell>
      <TableCell className={tableCell}>{currentScore.playerAlias}</TableCell>
      <TableCell className={tableCell}>
        {currentScore.finalScore.toLocaleString()}
      </TableCell>
      <TableCell className={tableCell}>
        {formatToReadableDate(currentScore.submittedAt)}
      </TableCell>
      <TableCell className={tableCell}>{currentScore.platform}</TableCell>
    </RowComponent>
  );
};
