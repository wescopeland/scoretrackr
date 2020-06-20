import { ApolloError } from 'apollo-server';

import { Track } from 'common/models/track.model';
import { db } from 'server/firebase-admin-app';

export const submissionCountFieldResolver = async (track: Track) => {
  try {
    // Find the game that contains this track.
    const trackGamesSnapshot = await db
      .firestore()
      .collection('scores')
      .where('trackId', '==', track.id)
      .get();

    return trackGamesSnapshot.docs.length;
  } catch (err) {
    throw new ApolloError(err);
  }
};
