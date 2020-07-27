import { Box, Typography } from '@material-ui/core';
import React from 'react';

import { AppBar } from '~/components/home/AppBar';
import { Header } from '~/components/home/Header';
import { MostRecentSubmissions } from '~/components/home/MostRecentSubmissions';
import { useTranslation } from '~/i18n';
import { SubmissionBlob } from '~/models/submission-blob.model';

const fetcher = (url) =>
  fetch(
    `${
      process.env.NODE_ENV === 'development'
        ? 'localhost:3000'
        : process.env.BASE_URL
    }/${url}`
  ).then((res) => (res.json() as unknown) as SubmissionBlob[]);

export async function getStaticProps() {
  const data = await fetcher('api/recent-submissions');
  return {
    props: { data },

    // Regenerate the page once every 30 minutes.
    revalidate: 30 * 60
  };
}

interface HomePageProps {
  data: SubmissionBlob[];
}

const HomePage = ({ data }) => {
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

// HomePage.getInitialProps = async () => ({
//   namespacesRequired: ['common']
// });

export default HomePage;
