import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Toolbar
} from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './GameSidenav.styles';

export const GameSidenav = () => {
  const { t } = useTranslation('game');
  const { drawer, drawerContainer, drawerPaper } = useStyles();

  return (
    <>
      <Drawer
        className={drawer}
        variant="permanent"
        classes={{ paper: drawerPaper }}
      >
        <Toolbar />
        <div className={drawerContainer}>
          <List component="nav">
            <ListSubheader component="div">
              {t('resources.navLabel')}
            </ListSubheader>
            <ListItem button={true} component="a" dense={true}>
              <ListItemText>{t('resources.leaderboard')}</ListItemText>
            </ListItem>
          </List>

          <Divider />

          <List component="nav">
            <ListSubheader component="div">{t('stats.navLabel')}</ListSubheader>
            <ListItem button={true} component="a" dense={true}>
              <ListItemText>{t('stats.topGames')}</ListItemText>
            </ListItem>
            <ListItem button={true} component="a" dense={true}>
              <ListItemText>{t('stats.comparisons')}</ListItemText>
            </ListItem>
            <ListItem button={true} component="a" dense={true}>
              <ListItemText>{t('stats.timelines')}</ListItemText>
            </ListItem>
            <ListItem button={true} component="a" dense={true}>
              <ListItemText>{t('stats.daysSince')}</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};
