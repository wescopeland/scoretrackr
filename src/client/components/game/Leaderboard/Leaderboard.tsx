import React from 'react';
import { useTranslation } from 'react-i18next';

import { EmptyState } from 'client/components/shared/EmptyState';

export const Leaderboard = () => {
  const { t } = useTranslation('game');

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <EmptyState
            heading={t('leaderboard.none.heading')}
            label={t('leaderboard.none.label')}
          />
        </div>
      </div>
    </div>
  );
};
