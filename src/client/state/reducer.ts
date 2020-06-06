import { combineReducers } from '@reduxjs/toolkit';

import { mostRecentSubmissions } from './most-recent-submissions';

const rootReducer = combineReducers({
  mostRecentSubmissions: mostRecentSubmissions.reducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
