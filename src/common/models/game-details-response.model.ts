import { DBTrack } from 'server/api/+models';

export interface GameDetailsResponse {
  color: string;
  name: string;
  tracks: DBTrack[];
}
