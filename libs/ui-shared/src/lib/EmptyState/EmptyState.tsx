import { Typography, useTheme } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import mdGhostsDark from './empty-ghosts-md--dark.svg';
import mdGhostsLight from './empty-ghosts-md--light.svg';
import smGhostsDark from './empty-ghosts-sm--dark.svg';
import smGhostsLight from './empty-ghosts-sm--light.svg';
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
