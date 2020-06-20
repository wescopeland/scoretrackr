import { Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import mdGhosts from 'client/assets/svg/empty-ghosts-md.svg';
import smGhost from 'client/assets/svg/empty-ghosts-sm.svg';
import { useStyles } from './EmptyState.styles';

interface EmptyStateProps {
  heading: string;
  label: string;
}

export const EmptyState = ({ heading, label }: EmptyStateProps) => {
  const { t } = useTranslation('common');
  const { headingText, smImage, mdImage } = useStyles();

  return (
    <div className="d-flex flex-column justify-content-center text-center">
      <img className={smImage} src={smGhost} alt={t('emptyStateAlt')} />
      <img className={mdImage} src={mdGhosts} alt={t('emptyStateAlt')} />

      <Typography className={headingText}>{heading}</Typography>
      <Typography>{label}</Typography>
    </div>
  );
};
