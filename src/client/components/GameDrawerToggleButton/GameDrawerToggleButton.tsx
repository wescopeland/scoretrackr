import { IconButton } from '@material-ui/core';
import { Menu } from 'mdi-material-ui';
import React from 'react';

import { useStyles } from './GameDrawerToggleButton.styles';

export const GameDrawerToggleButton = () => {
  const { button, icon } = useStyles();

  return (
    <IconButton size="small" className={button}>
      <Menu className={icon} />
    </IconButton>
  );
};
