import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

export const RecentSubmissionLoadingSkeleton = () => {
  return (
    <div data-testid="recent-submission-loading">
      <Skeleton variant="text" />
      <Box marginBottom={3}>
        <Skeleton animation="wave" variant="rect" height={90} />
      </Box>
      <Box marginBottom={3}>
        <Skeleton animation="wave" variant="rect" height={90} />
      </Box>
      <Box marginBottom={3}>
        <Skeleton animation="wave" variant="rect" height={90} />
      </Box>
    </div>
  );
};
