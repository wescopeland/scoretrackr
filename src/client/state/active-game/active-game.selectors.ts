import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../reducer';

export const selectActiveGameState = (state: AppState) => state.activeGame;

export const selectCurrentTrackId = createSelector(
  selectActiveGameState,
  (activeGameState) => activeGameState.selectedTrackId
);
