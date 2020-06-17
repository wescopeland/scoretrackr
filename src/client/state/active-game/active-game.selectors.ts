import { AppState } from '../reducer';

export const selectActiveGameDetails = (state: AppState) => ({
  color: state.activeGame.color,
  name: state.activeGame.name,
  tracks: state.activeGame.tracks
});

export const selectIsActiveGameLoading = (state: AppState) =>
  state.activeGame.isLoading;

export const selectIsDesktopSidenavOpen = (state: AppState) =>
  state.activeGame.isDesktopSidenavOpen;

export const selectIsMobileSidenavOpen = (state: AppState) =>
  state.activeGame.isMobileSidenavOpen;
