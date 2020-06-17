import { AppBar } from '@material-ui/core';
import React from 'react';

import { GamePicker } from '../GamePicker';
import { useStyles } from './GameNavBar.styles';

interface GameNavBarProps {
  isLoading: boolean;
  gameColor?: string;
  gameName?: string;
}

export const GameNavBar = ({
  gameColor,
  gameName,
  isLoading
}: GameNavBarProps) => {
  const { root } = useStyles();

  return (
    <AppBar
      data-testid="game-nav-bar"
      color="inherit"
      position="fixed"
      className={root}
    >
      <div className="container-fluid pl-0 pr-0">
        <div className="d-flex">
          <GamePicker
            gameColor={gameColor}
            gameName={gameName}
            isLoading={isLoading}
          />
        </div>
      </div>
    </AppBar>
  );
};
