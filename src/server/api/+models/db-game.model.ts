import { CollectionReference } from '@google-cloud/firestore';

import { DBTrack } from './db-track.model';

export interface DBGame {
  color: string;
  friendlyId: string;
  name: string;
  tracks: CollectionReference<DBTrack>;
}
