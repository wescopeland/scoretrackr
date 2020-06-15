import { AppState } from '../reducer';

export const selectGameColor = (state: AppState) => state.activeGame.color;
export const selectGameName = (state: AppState) => state.activeGame.name;

export const selectIsActiveGameLoading = (state: AppState) =>
  state.activeGame.isLoading;

export const selectIsDesktopSidenavOpen = (state: AppState) =>
  state.activeGame.isDesktopSidenavOpen;

export const selectIsMobileSidenavOpen = (state: AppState) =>
  state.activeGame.isMobileSidenavOpen;
