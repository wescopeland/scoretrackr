import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

import { formatNumberToOrdinal } from '~/utils/format-number-to-ordinal';
import { useStyles } from './RecentSubmission.styles';

interface RecentSubmissionProps {
  gameColor: string;
  gameName: string;
  gameId: string;
  trackName: string;
  playerAlias: string;
  score: number;
  position?: number;
}

export const RecentSubmission = ({
  gameColor,
  gameName,
  gameId,
  trackName,
  playerAlias,
  score,
  position
}: RecentSubmissionProps) => {
  const {
    card,
    cardContentContainer,
    cardMedia,
    segmentOne,
    segmentTwo,
    segmentTwoOrdinal,
    segmentThree,
    truncatedText,
    positionText,
    positionTextContainer
  } = useStyles({
    gameColor
  });

  const imageUrl = `/images/games/${gameId}.gif`;
  const ordinalPosition = position ? formatNumberToOrdinal(position) : '';

  return (
    <Card className={card}>
      <img
        src={imageUrl}
        className={cardMedia}
        alt={`${gameName} Screenshot`}
      />

      <CardContent className={cardContentContainer}>
        <div className={segmentOne}>
          <Typography className={truncatedText} variant="h6">
            {gameName}
          </Typography>
          <Typography className={truncatedText}>{trackName}</Typography>
        </div>

        <div className={segmentTwo}>
          <Typography variant="h6">
            {score.toLocaleString()}{' '}
            <span className={segmentTwoOrdinal}>&ndash; {ordinalPosition}</span>
          </Typography>
          <Typography className={truncatedText} title={playerAlias}>
            {playerAlias}
          </Typography>
        </div>

        <div className={`${segmentThree} ${positionTextContainer}`}>
          <Typography className={positionText}>{ordinalPosition}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
