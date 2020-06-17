import { ApolloError } from 'apollo-server';

import { Game } from 'common/models/game.model';
import { getDocumentDataWithId } from 'common/utils/api/get-document-data-with-id';
import { DBScore } from 'server/api/+models';

export const gameFieldResolver = async (score: DBScore) => {
  try {
    const dbGame = await score._gameRef.get();
    return getDocumentDataWithId<Game>(dbGame);
  } catch (err) {
    throw new ApolloError(err);
  }
};
