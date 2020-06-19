import { ApolloError } from 'apollo-server';

import { Game } from 'common/models/game.model';
import { Track } from 'common/models/track.model';
import { getDocumentDataWithId } from 'common/utils/api/get-document-data-with-id';
import { db } from 'server/firebase-admin-app';

export const tracksFieldResolver = async (game: Game) => {
  try {
    const trackDocs = await db
      .firestore()
      .collection(`games/${game.id}/tracks`)
      .get();

    const tracks = trackDocs.docs.map((track) =>
      getDocumentDataWithId<Track>(track)
    );

    return tracks;
  } catch (err) {
    throw new ApolloError(err);
  }
};
