import { Game } from 'client/state/shared-models';

export interface Submission {
  game: Game;
  track: string;
  playerAlias: string;
  score: number;
  position: number;
}
