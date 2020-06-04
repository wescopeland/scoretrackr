import { DocumentReference, Timestamp } from '@google-cloud/firestore';

import { DBGame } from './db-game.model';
import { DBTrack } from './db-track.model';

export interface DBScore {
  _gameRef: DocumentReference<DBGame>;
  _trackRef: DocumentReference<DBTrack>;
  finalScore: number;
  playerAlias: string;
  platform: string;
  submittedAt: Timestamp;
}
