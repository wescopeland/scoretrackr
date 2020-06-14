import { Skeleton } from '@material-ui/lab';
import React from 'react';

interface LeaderboardTabsLoadingSkeletonProps {
  className: string;
  onClick: any;
  children: any;
}

export const LeaderboardTabsLoadingSkeleton = (
  props: LeaderboardTabsLoadingSkeletonProps
) => {
  return (
    <Skeleton
      data-testid="game-tabs-loading"
      width="100%"
      height={36}
      variant="rect"
    />
  );
};
