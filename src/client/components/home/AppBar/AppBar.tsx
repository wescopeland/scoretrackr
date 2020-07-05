import { AppBar as MuiAppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './AppBar.styles';

export const AppBar = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();

  return (
    <MuiAppBar position="static">
      <Toolbar variant="dense" className={classes.toolbar}>
        <Button color="inherit">{t('signUp')}</Button>
        <Button color="inherit">{t('logIn')}</Button>
      </Toolbar>
    </MuiAppBar>
  );
};
