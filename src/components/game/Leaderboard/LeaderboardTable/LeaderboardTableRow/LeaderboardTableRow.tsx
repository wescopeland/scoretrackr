import { TableCell, TableRow, useTheme } from '@material-ui/core';
import React from 'react';

import { Score } from '~/entities';
import { formatToReadableDate } from '~/utils/format-to-readable-date';
import { useStyles as useRootStyles } from '../LeaderboardTable.styles';
import { StyledTableRow, useStyles } from './LeaderboardTableRow.styles';

interface LeaderboardTableRowProps {
  activeGameColor: string;
  canShowRowsWithColoredBackgrounds: boolean;
  currentScore: Score;
  firstPlaceScore: number;
  tenthPlaceScore?: number;
}

export const LeaderboardTableRow = ({
  activeGameColor,
  canShowRowsWithColoredBackgrounds,
  currentScore,
  firstPlaceScore,
  tenthPlaceScore
}: LeaderboardTableRowProps) => {
  const theme = useTheme();
  const { tableCell } = useRootStyles();
  const {
    firstPlaceCellBorder,
    secondPlaceCellBorder,
    thirdPlaceCellBorder
  } = useStyles();

  const isLightMode = theme.palette.type === 'light';
  const surfaceColor = theme.palette.background.paper;

  const isColoredBackgroundRow = (position: number) => {
    return canShowRowsWithColoredBackgrounds && position <= 10;
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
    canShowRowsWithColoredBackgrounds && currentScore.position <= 10
      ? StyledTableRow
      : TableRow;

  return (
    <RowComponent
      key={currentScore.id}
      position={currentScore.position}
      islightmode={String(isLightMode)}
      surfacecolor={surfaceColor}
      first={
        isColoredBackgroundRow(currentScore.position)
          ? firstPlaceScore
          : undefined
      }
      tenth={
        isColoredBackgroundRow(currentScore.position)
          ? tenthPlaceScore
          : undefined
      }
      score={
        isColoredBackgroundRow(currentScore.position)
          ? currentScore.finalScore
          : undefined
      }
      bgcolor={
        isColoredBackgroundRow(currentScore.position)
          ? activeGameColor
          : undefined
      }
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
