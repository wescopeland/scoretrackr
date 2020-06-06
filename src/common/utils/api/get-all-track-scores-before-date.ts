import { DocumentReference } from '@google-cloud/firestore';

import { DBTrack } from 'server/api/+models';
import { db } from 'server/firebase-admin-app';

export async function getAllTrackScoresBeforeDate(
  trackRef: DocumentReference<DBTrack>,
  beforeDate: Date
) {
  const scoresSnapshot = await db
    .firestore()
    .collection('scores')
    .where('_trackRef', '==', trackRef)
    .where('submittedAt', '<=', beforeDate)
    .get();

  return scoresSnapshot.docs;
}
