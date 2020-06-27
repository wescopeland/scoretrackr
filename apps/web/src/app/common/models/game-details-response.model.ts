import { Track } from './track.model';

export interface GameDetailsResponse {
  color: string;
  name: string;
  tracks: Track[];
}
