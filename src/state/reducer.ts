import { combineReducers } from '@reduxjs/toolkit';

import { activeGame } from './active-game';

const rootReducer = combineReducers({
  activeGame: activeGame.reducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
