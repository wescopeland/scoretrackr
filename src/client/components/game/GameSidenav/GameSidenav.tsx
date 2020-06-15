import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  Toolbar
} from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
  activeGameActions,
  selectIsDesktopSidenavOpen,
  selectIsMobileSidenavOpen
} from 'client/state/active-game';
import { SidenavLink } from '../SidenavLink';
import { useStyles } from './GameSidenav.styles';

export const GameSidenav = () => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();
  const isDesktopSidenavOpen = useSelector(selectIsDesktopSidenavOpen);
  const isMobileSidenavOpen = useSelector(selectIsMobileSidenavOpen);
  const { drawer, drawerContainer, drawerPaper } = useStyles();

  const container =
    typeof window !== 'undefined' ? () => window.document.body : undefined;

  const handleMobileDrawerToggle = () => {
    dispatch(activeGameActions.toggleIsMobileSidenavOpen());
  };

  const sidenavContent = (
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

  return (
    <>
      {/* Desktop sidenav */}
      <Hidden smDown={true} implementation="css">
        <Drawer
          className={drawer}
          variant="persistent"
          classes={{ paper: drawerPaper }}
          open={isDesktopSidenavOpen}
          anchor="left"
        >
          <Toolbar />
          {sidenavContent}
        </Drawer>
      </Hidden>

      {/* Mobile sidenav */}
      <Hidden mdUp={true} implementation="css">
        <Drawer
          className={drawer}
          classes={{ paper: drawerPaper }}
          variant="temporary"
          anchor="left"
          container={container}
          open={isMobileSidenavOpen}
          onClose={handleMobileDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {sidenavContent}
        </Drawer>
      </Hidden>
    </>
  );
};
