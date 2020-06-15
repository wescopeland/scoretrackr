import { AppState } from '../reducer';

export const selectIsMostRecentSubmissionsLoading = (state: AppState) =>
  state.mostRecentSubmissions.isLoading;

export const selectMostRecentSubmissions = (state: AppState) =>
  state.mostRecentSubmissions.submissionBlobs;
