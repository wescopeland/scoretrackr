import { ApolloError } from 'apollo-server';

import { Track } from 'common/models/track.model';
import { getDocumentDataWithId } from 'common/utils/api/get-document-data-with-id';
import { DBScore } from 'server/api/+models';

export const trackFieldResolver = async (score: DBScore) => {
  try {
    const dbTrack = await score._trackRef.get();
    return getDocumentDataWithId<Track>(dbTrack);
  } catch (err) {
    throw new ApolloError(err);
  }
};
