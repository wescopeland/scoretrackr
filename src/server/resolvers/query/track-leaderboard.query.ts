import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';

import { filterScoresByPlayerTop } from 'common/utils/api';
import { db } from 'server/firebase-admin-app';

export const trackLeaderboardQuery = async (
  _: null,
  args: { trackId: string; onDate?: Date }
) => {
  try {
    const cutoffDate = args.onDate ?? new Date();

    const trackScores = await db
      .firestore()
      .collection('scores')
      .where(
        'submittedAt',
        '<=',
        admin.firestore.Timestamp.fromDate(cutoffDate)
      )
      .where('trackId', '==', args.trackId)
      .get();

    const onlyPersonalBestScores = filterScoresByPlayerTop(trackScores);

    return onlyPersonalBestScores;
  } catch (err) {
    throw new ApolloError(err);
  }
};
