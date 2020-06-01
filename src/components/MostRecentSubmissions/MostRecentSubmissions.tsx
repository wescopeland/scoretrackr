import { Box, Divider, Typography } from '@material-ui/core';
import React from 'react';

import { RecentSubmission } from '../RecentSubmission';

export const MostRecentSubmissions = () => {
  return (
    <>
      <Typography variant="subtitle1" className="mb-1">
        Today
      </Typography>

      <Box marginBottom={2}>
        <RecentSubmission
          gameColor="#ba3448"
          gameFriendlyId="dkong"
          gameName="Donkey Kong"
          trackName="Factory settings"
          playerAlias="Justin Elliott"
          score={1230000}
          position={3}
        />
      </Box>

      <Box marginBottom={2}>
        <RecentSubmission
          gameColor="#ba3448"
          gameFriendlyId="dkong"
          gameName="Donkey Kong"
          trackName="Factory settings"
          playerAlias="Wes Copeland"
          score={1218000}
          position={4}
        />
      </Box>

      <Typography variant="subtitle1" className="mt-4 mb-1">
        Yesterday
      </Typography>

      <Box marginBottom={2}>
        <RecentSubmission
          gameColor="#3451ba"
          gameFriendlyId="dkongjr"
          gameName="Donkey Kong Jr."
          trackName="Factory settings"
          playerAlias="Ben Falls"
          score={1420000}
          position={1}
        />
      </Box>
    </>
  );
};
