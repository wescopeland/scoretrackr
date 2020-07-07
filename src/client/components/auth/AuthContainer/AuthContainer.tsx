import { Paper } from '@material-ui/core';
import React from 'react';

import { useStyles } from './AuthContainer.styles';

interface AuthContainerProps {
  children: React.ReactNode;
}

export const AuthContainer = ({ children }: AuthContainerProps) => {
  const { root } = useStyles();

  return <Paper className={root}>{children}</Paper>;
};
