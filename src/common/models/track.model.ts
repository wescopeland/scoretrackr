import { DBTrack } from 'server/api/+models';

export interface Track extends DBTrack {
  id: string;
}
