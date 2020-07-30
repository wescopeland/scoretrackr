import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useSWR from 'swr';

import { AppBar } from '~/components/home/AppBar';
import { Header } from '~/components/home/Header';
import { MostRecentSubmissions } from '~/components/home/MostRecentSubmissions';
import { useTranslation } from '~/i18n';
import { SubmissionBlob } from '~/models/submission-blob.model';

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomePage = () => {
  const { t } = useTranslation('common');
  const { data, error } = useSWR<SubmissionBlob[], any>(
    '/api/recent-submissions',
    fetcher
  );

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
              <MostRecentSubmissions submissions={data} />
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

HomePage.defaultProps = {
  i18nNamespaces: ['common']
};

export default HomePage;
