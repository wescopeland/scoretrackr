import { Divider, List, ListSubheader } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { SidenavLink } from '../SidenavLink';
import { useStyles } from './GameSidenavContent.styles';

export const GameSidenavContent = () => {
  const { t } = useTranslation('game');
  const { drawerContainer } = useStyles();

  return (
    <div className={drawerContainer}>
      <List component="nav">
        <ListSubheader component="div">{t('resources.navLabel')}</ListSubheader>
        <SidenavLink label={t('resources.leaderboard')} />
      </List>

      <Divider />

      <List component="nav">
        <ListSubheader component="div">{t('stats.navLabel')}</ListSubheader>
        <SidenavLink label={t('stats.topGames')} />
        <SidenavLink label={t('stats.comparisons')} />
        <SidenavLink label={t('stats.timelines')} />
        <SidenavLink label={t('stats.daysSince')} />
      </List>
    </div>
  );
};
