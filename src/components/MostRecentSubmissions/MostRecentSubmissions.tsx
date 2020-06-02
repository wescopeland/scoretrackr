import { Box, Typography } from '@material-ui/core';
import { isToday, isYesterday, parseISO } from 'date-fns';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatDistanceToNow } from 'utils/format-distance-to-now';
import { RecentSubmission } from '../RecentSubmission';

interface Game {
  name: string;
  friendlyId: string;
  color: string;
}

interface Submission {
  game: Game;
  track: string;
  playerAlias: string;
  score: number;
  position: number;
}

interface SubmissionBlob {
  date: string;
  submissions: Submission[];
}

const recentSubmissions: SubmissionBlob[] = [];

export const MostRecentSubmissions = () => {
  const { t } = useTranslation('common');

  const getDateDistanceText = (date: string) => {
    const parsedDate = parseISO(date);

    if (isToday(parsedDate)) {
      return t('recentSubmissions.today');
    } else if (isYesterday(parsedDate)) {
      return t('recentSubmissions.yesterday');
    }

    return formatDistanceToNow(parsedDate);
  };

  return (
    <>
      {recentSubmissions.length ? (
        recentSubmissions.map((recentSubmission, index) => (
          <div key={recentSubmission.date}>
            <Typography
              variant="subtitle1"
              className={`mb-1 ${index !== 0 && 'mt-5'}`}
            >
              {getDateDistanceText(recentSubmission.date)}
            </Typography>

            {recentSubmission.submissions.map((submission) => (
              <Box
                key={`${submission.game} ${submission.playerAlias} ${submission.score}`}
                marginBottom={2}
              >
                <RecentSubmission
                  gameColor={submission.game.color}
                  gameFriendlyId={submission.game.friendlyId}
                  gameName={submission.game.name}
                  trackName={submission.track}
                  playerAlias={submission.playerAlias}
                  score={submission.score}
                  position={submission.position}
                />
              </Box>
            ))}
          </div>
        ))
      ) : (
        <Box textAlign="center">
          <Typography>{t('recentSubmissions.none')}</Typography>
        </Box>
      )}
    </>
  );
};
