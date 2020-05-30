import { Divider } from '@material-ui/core';
import React from 'react';

import { RecentSubmission } from '../RecentSubmission';

export const MostRecentSubmissions = () => {
  return (
    <>
      <RecentSubmission />
      <Divider />
      <RecentSubmission />
      <Divider />
      <RecentSubmission />
    </>
  );
};
