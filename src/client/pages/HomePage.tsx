import { Box, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { MostRecentSubmissions } from 'client/components/game/MostRecentSubmissions';
import { AppBar } from 'client/components/home/AppBar';
import { Header } from 'client/components/home/Header';
import { getMostRecentSubmissions } from 'client/state/most-recent-submissions';

export const HomePage = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostRecentSubmissions());
  }, [dispatch]);

  return (
    <>
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
    </>
  );
};
