import { Game } from './game.model';
import { Track } from './track.model';

export interface Score {
  id: string;
  finalScore: number;
  playerAlias: string;
  platform: string;
  submittedAt: Date;
  game: Game;
  track: Track;
  position?: number;
}
