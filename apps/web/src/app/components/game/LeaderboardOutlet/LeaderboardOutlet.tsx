import { useQuery } from 'graphql-hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { EmptyState } from '@scoretrackr/ui-shared';
import { selectCurrentTrack } from '../../../state/active-game';
import { Score } from '@scoretrackr/data-access-entities';
import { GetTrackLeaderboard } from '@scoretrackr/data-access-gql-queries';

export const LeaderboardOutlet = () => {
  const currentTrack = useSelector(selectCurrentTrack);

  const { loading, error, data } = useQuery<{ trackLeaderboard: Score[] }>(
    GetTrackLeaderboard,
    {
      variables: {
        trackId: currentTrack.id
      }
    }
  );

  const { t } = useTranslation('game');

  return (
    <div className="container">
      {loading ? (
        <p>loading</p>
      ) : data.trackLeaderboard.length ? (
        <p>got records</p>
      ) : (
        <div className="row mt-5">
          <div className="col">
            <EmptyState
              heading={t('leaderboard.none.heading')}
              label={t('leaderboard.none.label')}
            />
          </div>
        </div>
      )}
    </div>
  );
};
