import { Track } from 'common/entities';

export interface GameDetailsResponse {
  color: string;
  name: string;
  tracks: Track[];
}
