import { ApolloError, ValidationError } from 'apollo-server';

import { Score } from 'common/models/score.model';
import { getDocumentDataWithId } from 'common/utils/api';
import { db } from 'server/firebase-admin-app';

export const scoreQuery = async (_: null, args: { id: string }) => {
  try {
    const scoreDoc = await db
      .firestore()
      .collection('scores')
      .doc(args.id)
      .get();

    const score = getDocumentDataWithId<Score>(scoreDoc);
    return score || new ValidationError('Score ID not found');
  } catch (err) {
    throw new ApolloError(err);
  }
};
