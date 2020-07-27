import { AppBar as MuiAppBar, Toolbar } from '@material-ui/core';
import React from 'react';

import { useTranslation } from '~/i18n';
import { useStyles } from './AppBar.styles';

export const AppBar = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();

  return (
    <MuiAppBar position="static">
      <Toolbar variant="dense" className={classes.toolbar}>
        {/* <Link component={Button} color="inherit" to="/sign-up">
          {t('signUp')}
        </Link>

        <Link component={Button} color="inherit" to="/login">
          {t('logIn')}
        </Link> */}
      </Toolbar>
    </MuiAppBar>
  );
};
