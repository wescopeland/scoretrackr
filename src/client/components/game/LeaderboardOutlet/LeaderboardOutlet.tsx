import { useQuery } from 'graphql-hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { EmptyState } from 'client/components/shared/EmptyState';
import { selectCurrentTrack } from 'client/state/active-game';
import { Score } from 'common/entities';
import GetTrackLeaderboard from 'common/queries/get-track-leaderboard.graphql';
import { Leaderboard } from '../Leaderboard';

export const LeaderboardOutlet = () => {
  const currentTrack = useSelector(selectCurrentTrack);

  const { loading, error, data } = useQuery<{
    trackLeaderboard: Score[];
  }>(GetTrackLeaderboard, {
    variables: {
      trackId: currentTrack.id
    }
  });

  const { t } = useTranslation('game');

  return (
    <div className="container">
      {loading ? (
        <p>loading</p>
      ) : data.trackLeaderboard.length ? (
        <div className="row mt-5">
          <div className="col">
            <Leaderboard scores={data.trackLeaderboard} />
          </div>
        </div>
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
