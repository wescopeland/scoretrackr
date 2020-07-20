import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../reducer';

export const selectActiveGameState = (state: AppState) => state.activeGame;

export const selectCurrentTrack = createSelector(
  selectActiveGameState,
  (activeGameState) => ({
    id: activeGameState.selectedTrackId,
    friendlyId: activeGameState.selectedTrackFriendlyId
  })
);

export const selectActiveGameColor = createSelector(
  selectActiveGameState,
  (activeGameState) => activeGameState.hexColor
);
