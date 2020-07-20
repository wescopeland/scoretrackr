import { Paper, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

import { useStyles } from './GamePicker.styles';

interface GamePickerProps {
  isLoading: boolean;
  gameColor?: string;
  gameName?: string;
}

export const GamePicker = ({
  gameColor,
  gameName,
  isLoading
}: GamePickerProps) => {
  const classes = useStyles({ gameColor, isLoading });

  const gameLetter = gameName ? gameName[0] : '';

  return (
    <Paper className={classes.root} role="button">
      <div
        className={classes.gameLetterContainer}
        data-testid="game-identifier"
      >
        <Typography className={classes.gameLetterText}>{gameLetter}</Typography>
      </div>

      <div className={classes.gameNameContainer}>
        {isLoading ? (
          <Skeleton
            data-testid="game-picker-loading"
            className={classes.loadingSkeleton}
            width={140}
            height={20}
            variant="rect"
          />
        ) : (
          <Typography className={classes.gameNameText}>{gameName}</Typography>
        )}
      </div>
    </Paper>
  );
};
