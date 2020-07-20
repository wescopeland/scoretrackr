import { Typography, useTheme } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './EmptyState.styles';

interface EmptyStateProps {
  heading: string;
  label: string;
}

export const EmptyState = ({ heading, label }: EmptyStateProps) => {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const { headingText, smImage, mdImage } = useStyles();

  const isDarkMode = theme.palette.type === 'dark';

  const mdGhostsDark = '/svg/empty-ghosts-md--dark.svg';
  const mdGhostsLight = '/svg/empty-ghosts-md--light.svg';
  const smGhostsDark = '/svg/empty-ghosts-sm--dark.svg';
  const smGhostsLight = '/svg/empty-ghosts-sm--light.svg';

  return (
    <div className="d-flex flex-column justify-content-center text-center">
      <img
        className={smImage}
        src={isDarkMode ? smGhostsDark : smGhostsLight}
        alt={t('emptyStateAlt')}
      />

      <img
        className={mdImage}
        src={isDarkMode ? mdGhostsDark : mdGhostsLight}
        alt={t('emptyStateAlt')}
      />

      <Typography className={headingText}>{heading}</Typography>
      <Typography>{label}</Typography>
    </div>
  );
};
