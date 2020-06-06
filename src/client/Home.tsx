import { Box, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { AppBar } from './components/AppBar';
import { Header } from './components/Header';
import { MostRecentSubmissions } from './components/MostRecentSubmissions';
import { getMostRecentSubmissions } from './state/most-recent-submissions';

export const Home = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostRecentSubmissions());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <AppBar />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Typography variant="h6">{t('recentSubmissions.label')}</Typography>
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
