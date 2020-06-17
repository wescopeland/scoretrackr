import { Track } from 'common/models/track.model';

export interface ActiveGameState {
  color: string;
  name: string;
  tracks: Track[];
  isDesktopSidenavOpen: boolean;
  isMobileSidenavOpen: boolean;
}
