import { GameDetailsTrack } from './game-details-track.model';

export interface GameDetailsResponse {
  id: string;
  color: string;
  name: string;
  tracks: GameDetailsTrack[];
}
