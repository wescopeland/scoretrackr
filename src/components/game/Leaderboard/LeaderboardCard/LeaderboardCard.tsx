import { CardContent, Typography } from '@material-ui/core';
import React from 'react';

import { ScoreWithPosition } from '~/models/score-with-position.model';
import { formatNumberToOrdinal } from '~/utils/format-number-to-ordinal';
import { formatToReadableDate } from '~/utils/format-to-readable-date';
import { StyledCard } from './LeaderboardCard.styles';

interface LeaderboardCardProps {
  activeGameColor: string;
  currentScore: ScoreWithPosition;
}

export const LeaderboardCard = ({
  activeGameColor,
  currentScore
}: LeaderboardCardProps) => {
  const position = formatNumberToOrdinal(currentScore.position);
  const displayDate = formatToReadableDate(currentScore.submittedAt);

  return (
    <StyledCard
      gamecolor={activeGameColor}
      position={currentScore.position}
      data-testid={`leaderboard-card-${currentScore.position}`}
    >
      <CardContent>
        <Typography variant="h6" data-testid="leaderboard-card-heading">
          {position} &ndash; {currentScore.finalScore.toLocaleString()}
        </Typography>
        <Typography data-testid="leaderboard-card-subheading">
          {displayDate}, {currentScore.playerAlias}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};
