import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppBar } from './components/AppBar';
import { Header } from './components/Header';
import { MostRecentSubmissions } from './components/MostRecentSubmissions';

export const Home = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Header />
      <AppBar />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Typography variant="h6">{t('mostRecentSubmissions')}</Typography>
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
