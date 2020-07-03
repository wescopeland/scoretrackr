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
import { useStyles } from './Leaderboard.styles';
import { LeaderboardTableRow } from './LeaderboardTableRow';

interface LeaderboardProps {
  scores: Score[];
}

export const Leaderboard = ({ scores }: LeaderboardProps) => {
  const activeGameColor = useSelector(selectActiveGameColor);
  const classes = useStyles();

  const canShowRowsWithColoredBackgrounds = scores.length > 10;

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
            return (
              <LeaderboardTableRow
                key={score.id}
                activeGameColor={activeGameColor}
                canShowRowsWithColoredBackgrounds={
                  canShowRowsWithColoredBackgrounds
                }
                currentIndex={index}
                currentScore={score}
                firstPlaceScore={scores[0].finalScore}
                tenthPlaceScore={scores[9]?.finalScore}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
