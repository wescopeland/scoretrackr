import { Box, Typography } from '@material-ui/core';
import React from 'react';

import { useTranslation } from '~/i18n';
import { AppBar } from '~/components/home/AppBar';
import { Header } from '~/components/home/Header';
import { MostRecentSubmissions } from '~/components/home/MostRecentSubmissions';

const HomePage = () => {
  const { t } = useTranslation('common');

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

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default HomePage;
