import { ApolloError, ValidationError } from 'apollo-server';

import { Game } from 'common/models/game.model';
import { getDocumentDataWithId } from 'common/utils/api';
import { db } from 'server/firebase-admin-app';

export const gameQuery = async (_: null, args: { friendlyId: string }) => {
  try {
    const gameDocs = await db
      .firestore()
      .collection('games')
      .where('friendlyId', '==', args.friendlyId)
      .limit(1)
      .get();

    const foundGameDetails = gameDocs.docs.map((game) =>
      getDocumentDataWithId<Game>(game)
    );

    if (foundGameDetails.length) {
      return foundGameDetails[0];
    } else {
      return new ValidationError('Game friendly ID not found');
    }
  } catch (err) {
    throw new ApolloError(err);
  }
};
