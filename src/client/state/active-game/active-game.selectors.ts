import { AppState } from '../reducer';

export const selectIsDesktopSidenavOpen = (state: AppState) =>
  state.activeGame.isDesktopSidenavOpen;

export const selectIsMobileSidenavOpen = (state: AppState) =>
  state.activeGame.isMobileSidenavOpen;
