import { Game } from './game.model';

export interface Track {
  id: string;
  name: string;
  friendlyId: string;
  game: Game;
  submissionCount: number;
}
