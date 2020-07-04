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
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectActiveGameColor } from 'client/state/active-game';
import { Score } from 'common/entities';
import { useStyles } from './Leaderboard.styles';
import { LeaderboardTableRow } from './LeaderboardTableRow';
import { SpacerRow } from './SpacerRow';

interface LeaderboardProps {
  scores: Score[];
}

export const Leaderboard = ({ scores }: LeaderboardProps) => {
  const { t } = useTranslation('game');
  const activeGameColor = useSelector(selectActiveGameColor);
  const classes = useStyles();

  const canShowRowsWithColoredBackgrounds = scores.length > 10;

  return (
    <TableContainer component={Paper}>
      <Table aria-label={t('leaderboard.ariaLabel')}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>#</TableCell>
            <TableCell className={classes.tableCell}>
              {t('leaderboard.header.player')}
            </TableCell>
            <TableCell className={classes.tableCell}>
              {t('leaderboard.header.score')}
            </TableCell>
            <TableCell className={classes.tableCell}>
              {t('leaderboard.header.date')}
            </TableCell>
            <TableCell className={classes.tableCell}>
              {t('leaderboard.header.platform')}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {scores.map((score, index) => {
            return (
              <>
                {index === 10 && <SpacerRow key="spacer" />}
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
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
