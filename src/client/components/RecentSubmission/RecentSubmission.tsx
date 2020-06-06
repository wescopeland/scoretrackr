import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

import { formatNumberToOrdinal } from 'common/utils/format-number-to-ordinal';
import { useStyles } from './RecentSubmission.styles';

interface LoadingRecentSubmissionProps {
  isLoading: true;
  gameColor?: string;
  gameName?: string;
  gameFriendlyId?: string;
  trackName?: string;
  playerAlias?: string;
  score?: number;
  position?: number;
}

interface HydratedRecentSubmissionProps {
  isLoading?: false;
  gameColor: string;
  gameName: string;
  gameFriendlyId: string;
  trackName: string;
  playerAlias: string;
  score: number;
  position: number;
}

type RecentSubmissionProps =
  | LoadingRecentSubmissionProps
  | HydratedRecentSubmissionProps;

export const RecentSubmission = ({
  isLoading,
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
    truncatedText,
    positionText,
    positionTextContainer
  } = useStyles({
    gameColor
  });

  const imageUrl = `/static/images/games/${gameFriendlyId}.gif`;
  const ordinalPosition = formatNumberToOrdinal(position);

  return (
    <>
      {isLoading ? (
        <>
          <Skeleton variant="text" />
          <Box marginBottom={3}>
            <Skeleton variant="rect" height={90} />
          </Box>
          <Box marginBottom={3}>
            <Skeleton variant="rect" height={90} />
          </Box>
          <Box marginBottom={3}>
            <Skeleton variant="rect" height={90} />
          </Box>
        </>
      ) : (
        <Card className={card}>
          <img src={imageUrl} className={cardMedia} />

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
                <span className={segmentTwoOrdinal}>
                  &ndash; {ordinalPosition}
                </span>
              </Typography>
              <Typography className={truncatedText} title={playerAlias}>
                {playerAlias}
              </Typography>
            </div>

            <div className={`${segmentThree} ${positionTextContainer}`}>
              <Typography className={positionText}>
                {ordinalPosition}
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
