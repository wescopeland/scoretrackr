import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { Score } from '@prisma/client';

import { EmptyState } from '~/components/shared/EmptyState';
import { selectCurrentTrack } from '~/state/active-game';
import { Leaderboard } from '../Leaderboard';

const fetcher = (url) =>
  fetch(url).then((res) => (res.json() as unknown) as Score[]);

export const LeaderboardOutlet = () => {
  const { t } = useTranslation('game');
  const currentTrack = useSelector(selectCurrentTrack);

  const { data, error } = useSWR(
    `/api/track-leaderboard/${currentTrack.id}`,
    fetcher
  );

  return (
    <div className="container">
      {!data && !error ? (
        <p>loading</p>
      ) : data.length ? (
        <div className="row mt-5">
          <div className="col">
            <Leaderboard scores={data} />
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
