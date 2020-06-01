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
  const { card, cardMedia, positionText } = useStyles({ gameColor });

  const imageUrl = `/static/images/games/${gameFriendlyId}.gif`;

  return (
    <Card className={card}>
      <img src={imageUrl} className={cardMedia} />

      <CardContent className="d-flex w-100 pl-5 pr-5 pb-3">
        <Box width={1 / 2}>
          <Typography variant="h6">{gameName}</Typography>
          <Typography>{trackName}</Typography>
        </Box>

        <Box width={1 / 4}>
          <Typography variant="h6">{score.toLocaleString()}</Typography>
          <Typography>{playerAlias}</Typography>
        </Box>

        <Box
          width={1 / 3}
          alignSelf="center"
          textAlign="right"
          className="pr-4"
        >
          <Typography className={positionText}>
            {numbro(position).format({ output: 'ordinal' })}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
