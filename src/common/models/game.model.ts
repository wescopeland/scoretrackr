import { Track } from './track.model';

export interface Game {
  id: string;
  friendlyId: string;
  name: string;
  color: string;
  tracks: Track[];
}
