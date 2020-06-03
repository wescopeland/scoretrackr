import { AppState } from '../reducer';

export const selectIsLoading = (state: AppState) =>
  state.mostRecentSubmissions.isLoading;

export const selectMostRecentSubmissions = (state: AppState) =>
  state.mostRecentSubmissions.submissionBlobs;
