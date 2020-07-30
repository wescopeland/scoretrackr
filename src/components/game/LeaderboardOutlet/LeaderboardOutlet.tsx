import React from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import { EmptyState } from '~/components/shared/EmptyState';
import { useTranslation } from '~/i18n';
import { ScoreWithPosition } from '~/models/score-with-position.model';
import { selectCurrentTrack } from '~/state/active-game';
import { Leaderboard } from '../Leaderboard';

const fetcher = (url) =>
  fetch(url).then((res) => (res.json() as unknown) as ScoreWithPosition[]);

export const LeaderboardOutlet = () => {
  const { t } = useTranslation('game');
  const currentTrack = useSelector(selectCurrentTrack);

  const { data, error } = useSWR(
    `/api/track-leaderboard/${currentTrack.id}`,
    fetcher
  );

  return (
    <div className="container">
      {data === undefined && !error ? (
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
