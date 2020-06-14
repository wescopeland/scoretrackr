import { Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from './EmptyState.styles';

interface EmptyStateProps {
  heading: string;
  label: string;
}

export const EmptyState = ({ heading, label }: EmptyStateProps) => {
  const { headingText, smImage, mdImage } = useStyles();

  return (
    <div className="d-flex flex-column justify-content-center text-center">
      <img
        className={smImage}
        src="/static/images/svg/empty-ghosts-sm.svg"
        alt="Spooky ghosts designating there is no data"
      />
      <img
        className={mdImage}
        src={`${process.env.RAZZLE_PUBLIC_DIR}/static/images/svg/empty-ghosts-md.svg`}
        alt="Spooky ghosts designating there is no data"
      />

      <Typography className={headingText}>{heading}</Typography>
      <Typography>{label}</Typography>
    </div>
  );
};
