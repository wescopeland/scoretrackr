import { List, ListSubheader } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { SidenavLink } from '../SidenavLink';
import { useStyles } from './GameSidenavContent.styles';

export const GameSidenavContent = () => {
  const { t } = useTranslation('game');

  const router = useRouter();
  const { friendlyId } = router.query;
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

      {/* <Divider />

      <List component="nav">
        <ListSubheader component="div">{t('stats.navLabel')}</ListSubheader>
        <SidenavLink
          label={t('stats.topGames')}
          to={`/game/{friendlyId}/topGames`}
        />
        <SidenavLink label={t('stats.comparisons')} to="/" />
        <SidenavLink label={t('stats.timelines')} to="/" />
        <SidenavLink label={t('stats.daysSince')} to="/" />
      </List> */}
    </div>
  );
};
