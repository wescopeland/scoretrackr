import { Paper, Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from './GamePicker.styles';

interface GamePickerProps {
  gameColor: string;
  gameName: string;
}

export const GamePicker = ({ gameColor, gameName }: GamePickerProps) => {
  const {
    gameLetterContainer,
    gameLetterText,
    gameNameContainer,
    gameNameText,
    root
  } = useStyles({ gameColor });

  const gameLetter = gameName[0];

  return (
    <Paper className={root} role="button">
      <div className={gameLetterContainer} data-testid="game-identifier">
        <Typography className={gameLetterText}>{gameLetter}</Typography>
      </div>

      <div className={gameNameContainer}>
        <Typography className={gameNameText}>{gameName}</Typography>
      </div>
    </Paper>
  );
};
