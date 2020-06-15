import { combineReducers } from '@reduxjs/toolkit';

import { activeGame } from './active-game';
import { mostRecentSubmissions } from './most-recent-submissions';

const rootReducer = combineReducers({
  activeGame: activeGame.reducer,
  mostRecentSubmissions: mostRecentSubmissions.reducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
