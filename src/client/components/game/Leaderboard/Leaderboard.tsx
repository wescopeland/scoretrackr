import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectActiveGameColor } from 'client/state/active-game';
import { Score } from 'common/entities';
import { formatToReadableDate } from 'common/utils/format-to-readable-date';
import { StyledTableRow, useStyles } from './Leaderboard.styles';

interface LeaderboardProps {
  scores: Score[];
}

export const Leaderboard = ({ scores }: LeaderboardProps) => {
  const activeGameColor = useSelector(selectActiveGameColor);
  const classes = useStyles();

  const canShowRowsWithColoredBackgrounds = scores.length > 10;

  const isColoredBackgroundRow = (rowIndex: number) => {
    return canShowRowsWithColoredBackgrounds && rowIndex <= 9;
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="leaderboard for track X">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>#</TableCell>
            <TableCell className={classes.tableCell}>Player</TableCell>
            <TableCell className={classes.tableCell}>Score</TableCell>
            <TableCell className={classes.tableCell}>Date</TableCell>
            <TableCell className={classes.tableCell}>Platform</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {scores.map((score, index) => {
            const RowComponent =
              canShowRowsWithColoredBackgrounds && index <= 9
                ? StyledTableRow
                : TableRow;

            return (
              <RowComponent
                key={score.id}
                bgcolor={
                  isColoredBackgroundRow(index) ? activeGameColor : undefined
                }
                first={
                  isColoredBackgroundRow(index)
                    ? scores[0].finalScore
                    : undefined
                }
                score={
                  isColoredBackgroundRow(index) ? score.finalScore : undefined
                }
                tenth={
                  isColoredBackgroundRow(index)
                    ? scores[9].finalScore
                    : undefined
                }
              >
                <TableCell className={classes.tableCell}>
                  {score.position}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {score.playerAlias}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {score.finalScore.toLocaleString()}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {formatToReadableDate(score.submittedAt)}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {score.platform}
                </TableCell>
              </RowComponent>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
