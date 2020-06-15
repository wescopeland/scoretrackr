import { IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import { Menu } from 'mdi-material-ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { activeGameActions } from 'client/state/active-game';
import { useStyles } from './GameDrawerToggleButton.styles';

interface GameDrawerToggleButtonProps {
  onDesktopClick: () => void;
  onMobileClick: () => void;
  isMobileSidenavOpen: boolean;
}

export const GameDrawerToggleButton = ({
  onDesktopClick,
  onMobileClick,
  isMobileSidenavOpen
}: GameDrawerToggleButtonProps) => {
  const { t } = useTranslation('game');
  const theme = useTheme();
  const isUsingMobileSidenav = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const { button, icon } = useStyles();

  // If we go from a mobile breakpoint to a desktop breakpoint and
  // the mobile sidenav is open, we should force it closed.
  // This is because the desktop sidenav should now be in view.
  if (!isUsingMobileSidenav && isMobileSidenavOpen) {
    dispatch(activeGameActions.toggleIsMobileSidenavOpen());
  }

  const handleOnClick = () => {
    isUsingMobileSidenav ? onMobileClick() : onDesktopClick();
  };

  return (
    <IconButton
      aria-label={t('contentNavBar.toggleButtonAriaLabel')}
      size="small"
      className={button}
      onClick={handleOnClick}
    >
      <Menu className={icon} />
    </IconButton>
  );
};
