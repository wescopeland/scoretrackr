import { Track } from './track.model';

export interface Game {
  id: string;
  name: string;
  color: string;
  tracks: Track[];
}
