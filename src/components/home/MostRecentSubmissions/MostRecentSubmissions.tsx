import { Box, Typography } from '@material-ui/core';
import { useQuery } from 'graphql-hooks';
import React from 'react';

import { useTranslation } from '~/i18n';
import { EmptyState } from '~/components/shared/EmptyState';
import { SubmissionBlob } from '~/models/submission-blob.model';
import { getMostRecentSubmissionsQuery } from '~/queries/get-most-recent-submissions.query';
import { getDateDistanceText } from '~/utils/get-date-distance-text';
import { RecentSubmission } from '../RecentSubmission';
import { RecentSubmissionLoadingSkeleton } from '../RecentSubmissionLoadingSkeleton';

export const MostRecentSubmissions = () => {
  const { t } = useTranslation('common');

  const { loading, error, data } = useQuery<{
    recentSubmissions: SubmissionBlob[];
  }>(getMostRecentSubmissionsQuery, {
    variables: {
      limitToDays: 4
    }
  });

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
              {getDateDistanceText(recentSubmission.date, t('dates.today'))}
            </Typography>

            {recentSubmission.submissions.map((submission) => (
              <Box
                key={`${submission.game} ${submission.playerAlias} ${submission.finalScore}`}
                marginBottom={2}
              >
                <RecentSubmission
                  gameColor={submission.game.color}
                  gameId={submission.game.id}
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
