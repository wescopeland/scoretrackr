import { DocumentReference } from '@google-cloud/firestore';

import { DBTrack } from 'server/api/+models';

export async function getAllTrackScoresBeforeDate(
  trackRef: DocumentReference<DBTrack>,
  beforeDate: Date
) {
  return true;
}
