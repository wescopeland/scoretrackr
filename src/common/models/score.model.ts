import { Game } from './game.model';
import { Track } from './track.model';

export interface Score {
  finalScore: number;
  playerAlias: string;
  platform: string;
  submittedAt: Date;
  position: number;
  game: Partial<Game>;
  track: Partial<Track>;
}
