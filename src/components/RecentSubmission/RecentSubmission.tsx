import { Box, Card, CardContent, Typography } from '@material-ui/core';
import numbro from 'numbro';
import React from 'react';

import { useStyles } from './RecentSubmission.styles';

interface RecentSubmissionProps {
  gameColor: string;
  gameName: string;
  gameFriendlyId: string;
  trackName: string;
  playerAlias: string;
  score: number;
  position: number;
}

export const RecentSubmission = ({
  gameColor,
  gameName,
  gameFriendlyId,
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
    positionText,
    positionTextContainer
  } = useStyles({
    gameColor
  });

  const imageUrl = `/static/images/games/${gameFriendlyId}.gif`;
  const ordinalPosition = numbro(position).format({ output: 'ordinal' });

  return (
    <Card className={card}>
      <img src={imageUrl} className={cardMedia} />

      <CardContent className={cardContentContainer}>
        <div className={segmentOne}>
          <Typography variant="h6">{gameName}</Typography>
          <Typography>{trackName}</Typography>
        </div>

        <div className={segmentTwo}>
          <Typography variant="h6">
            {score.toLocaleString()}{' '}
            <span className={segmentTwoOrdinal}>&ndash; {ordinalPosition}</span>
          </Typography>
          <Typography>{playerAlias}</Typography>
        </div>

        <div className={`${segmentThree} ${positionTextContainer}`}>
          <Typography className={positionText}>{ordinalPosition}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
