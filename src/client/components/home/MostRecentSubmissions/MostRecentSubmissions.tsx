import { Box, Typography } from '@material-ui/core';
import { isToday, isYesterday, parseISO } from 'date-fns';
import { useQuery } from 'graphql-hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { EmptyState } from 'client/components/shared/EmptyState';
import { SubmissionBlob } from 'common/models/submission-blob.model';
import GetMostRecentSubmissions from 'common/queries/get-most-recent-submissions.graphql';
import { formatDistanceToNow } from 'common/utils/format-distance-to-now';
import { RecentSubmission } from '../RecentSubmission';
import { RecentSubmissionLoadingSkeleton } from '../RecentSubmissionLoadingSkeleton';

export const MostRecentSubmissions = () => {
  const { loading, error, data } = useQuery<{
    recentSubmissions: SubmissionBlob[];
  }>(GetMostRecentSubmissions, {
    variables: {
      limitToDays: 4
    }
  });

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
      {loading ? (
        <RecentSubmissionLoadingSkeleton />
      ) : data.recentSubmissions.length ? (
        data.recentSubmissions.map((recentSubmission, index) => (
          <div key={recentSubmission.date}>
            <Typography
              variant="subtitle1"
              className={`mb-1 ${index !== 0 && 'mt-5'}`}
            >
              {getDateDistanceText(recentSubmission.date)}
            </Typography>

            {recentSubmission.submissions.map((submission) => (
              <Box
                key={`${submission.game} ${submission.playerAlias} ${submission.finalScore}`}
                marginBottom={2}
              >
                <RecentSubmission
                  gameColor={submission.game.color}
                  gameFriendlyId={submission.game.friendlyId}
                  gameName={submission.game.name}
                  trackName={submission.track.name}
                  playerAlias={submission.playerAlias}
                  score={submission.finalScore}
                  position={submission.position}
                />
              </Box>
            ))}
          </div>
        ))
      ) : (
        <EmptyState
          heading={t('recentSubmissions.none.heading')}
          label={t('recentSubmissions.none.label')}
        />
      )}
    </>
  );
};
