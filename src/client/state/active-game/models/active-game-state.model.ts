export interface ActiveGameState {
  canShowTracksBar: boolean;
  isDesktopSidenavOpen: boolean;
  isMobileSidenavOpen: boolean;
  name?: string;
  hexColor?: string;
  selectedTrackId?: string;
  selectedTrackFriendlyId?: string;
}
