import { Track } from 'common/models/track.model';

export interface GameDetailsResponse {
  color: string;
  name: string;
  tracks: Track[];
}
