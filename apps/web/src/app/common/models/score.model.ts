import { Game } from './game.model';
import { Track } from './track.model';

export interface Score {
  finalScore: number;
  playerAlias: string;
  platform: string;
  submittedAt: Date;
  game: Partial<Game>;
  track: Partial<Track>;
  trackId: string;
  position?: number;
}
