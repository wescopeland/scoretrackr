import { Divider, List, ListSubheader } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { SidenavLink } from '../SidenavLink';
import { useStyles } from './GameSidenavContent.styles';

export const GameSidenavContent = () => {
  const { t } = useTranslation('game');
  const { friendlyId } = useParams();
  const { drawerContainer } = useStyles();

  return (
    <div className={drawerContainer}>
      <List component="nav">
        <ListSubheader component="div">{t('resources.navLabel')}</ListSubheader>
        <SidenavLink
          label={t('resources.leaderboard')}
          to={`/game/${friendlyId}`}
        />
      </List>

      <Divider />

      {/* <List component="nav">
        <ListSubheader component="div">{t('stats.navLabel')}</ListSubheader>
        <SidenavLink label={t('stats.topGames')} />
        <SidenavLink label={t('stats.comparisons')} />
        <SidenavLink label={t('stats.timelines')} />
        <SidenavLink label={t('stats.daysSince')} />
      </List> */}
    </div>
  );
};
