import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import React, { Fragment } from 'react';

import { useTranslation } from '~/i18n';
import { ScoreWithPosition } from '~/models/score-with-position.model';
import { useStyles } from './LeaderboardTable.styles';
import { LeaderboardTableRow } from './LeaderboardTableRow';
import { SpacerRow } from './SpacerRow';

interface LeaderboardTableProps {
  activeGameColor: string;
  canShowColors: boolean;
  scores: ScoreWithPosition[];
}

export const LeaderboardTable = ({
  activeGameColor,
  canShowColors,
  scores
}: LeaderboardTableProps) => {
  const { t } = useTranslation('game');
  const classes = useStyles();

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
              <Fragment key={score.id}>
                {index === 10 && <SpacerRow />}
                <LeaderboardTableRow
                  activeGameColor={activeGameColor}
                  canShowRowsWithColoredBackgrounds={canShowColors}
                  currentScore={score}
                  firstPlaceScore={scores[0].finalScore}
                  tenthPlaceScore={scores[9]?.finalScore}
                />
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
