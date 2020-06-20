import { Drawer, Hidden, Toolbar } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  activeGameActions,
  selectActiveGameState
} from 'client/state/active-game';
import { GameSidenavContent } from '../GameSidenavContent';
import { useStyles } from './GameSidenav.styles';

export const GameSidenav = () => {
  const dispatch = useDispatch();
  const activeGameState = useSelector(selectActiveGameState);
  const { drawer, drawerPaper } = useStyles();

  const container =
    typeof window !== 'undefined' ? () => window.document.body : undefined;

  const handleMobileDrawerToggle = () => {
    dispatch(activeGameActions.toggleIsMobileSidenavOpen());
  };

  return (
    <div data-testid="game-sidenav">
      {/* Desktop sidenav */}
      <Hidden smDown={true} implementation="css">
        <Drawer
          className={drawer}
          variant="persistent"
          classes={{ paper: drawerPaper }}
          open={activeGameState.isDesktopSidenavOpen}
          anchor="left"
        >
          <Toolbar />
          <GameSidenavContent />
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
          open={activeGameState.isMobileSidenavOpen}
          onClose={handleMobileDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          <GameSidenavContent />
        </Drawer>
      </Hidden>
    </div>
  );
};
