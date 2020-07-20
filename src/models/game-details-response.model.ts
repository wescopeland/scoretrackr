import { Track } from '~/entities';

export interface GameDetailsResponse {
  color: string;
  name: string;
  tracks: Track[];
}
