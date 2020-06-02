import { Box, Typography } from '@material-ui/core';
import React from 'react';

import { AppBar } from './components/AppBar';
import { Header } from './components/Header';
import { MostRecentSubmissions } from './components/MostRecentSubmissions';

export const Home = () => {
  return (
    <div>
      <Header />
      <AppBar />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Typography variant="h6">Most recent submissions</Typography>
          </div>
        </div>

        <Box marginTop={5}>
          <div className="row">
            <div className="col">
              <MostRecentSubmissions />
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};
