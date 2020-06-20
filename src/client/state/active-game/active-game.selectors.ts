import { AppState } from '../reducer';

export const selectActiveGameState = (state: AppState) => state.activeGame;
