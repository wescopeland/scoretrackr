import { Typography } from '@material-ui/core';
import React from 'react';

import { useTranslation } from '~/i18n';
import { useStyles } from './Header.styles';

export const Header = () => {
  const { appName, description } = useStyles();
  const { t } = useTranslation('common');

  return (
    <div className="container">
      <div className="row">
        <div className="col p-3">
          <Typography className={appName} variant="h4" component="h1">
            Scoretrac.kr
          </Typography>

          <Typography className={description}>
            {t('header.description')}
          </Typography>
        </div>
      </div>
    </div>
  );
};
