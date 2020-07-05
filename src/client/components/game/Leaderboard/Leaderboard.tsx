import { useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectActiveGameColor } from 'client/state/active-game';
import { Score } from 'common/entities';
import { LeaderboardCard } from './LeaderboardCard';
import { LeaderboardTable } from './LeaderboardTable';

interface LeaderboardProps {
  scores: Score[];
}

export const Leaderboard = ({ scores }: LeaderboardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const activeGameColor = useSelector(selectActiveGameColor);

  const canShowLeaderboardColors = scores.length > 10;

  const mobileTemplate = (
    <>
      {scores.map((score) => (
        <div key={score.id} className="row mt-4">
          <div className="col">
            <LeaderboardCard
              activeGameColor={activeGameColor}
              currentScore={score}
            />
          </div>
        </div>
      ))}
    </>
  );

  const desktopTemplate = (
    <LeaderboardTable
      activeGameColor={activeGameColor}
      canShowColors={canShowLeaderboardColors}
      scores={scores}
    />
  );

  return isMobile ? mobileTemplate : desktopTemplate;
};
