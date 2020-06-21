import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';

import { filterScoresByPlayerTop } from 'common/utils/api';
import { DBScore } from 'server/api/+models';
import { db } from 'server/firebase-admin-app';

interface PositionRecord {
  position: number;
  score: number;
}

export const positionFieldResolver = async (
  score: DBScore,
  args?: { fromDate?: Date }
) => {
  try {
    const cutoffDate = args.fromDate ?? new Date();

    const allTrackScores = await db
      .firestore()
      .collection('scores')
      .where('_trackRef', '==', score._trackRef)
      .where(
        'submittedAt',
        '<=',
        admin.firestore.Timestamp.fromDate(cutoffDate)
      )
      .get(); // => [500, 400, 400, 300, 200, 100] -> (1, 2, 2, 4, 5, 6)

    const filteredScores = filterScoresByPlayerTop(allTrackScores);

    const positions: PositionRecord[] = [];
    let tieCounter = 1;

    for (const [index, filteredScore] of filteredScores.entries()) {
      if (index === 0) {
        positions[index] = { position: 1, score: filteredScore.finalScore };
      } else if (positions[index - 1].score === filteredScore.finalScore) {
        // Fall into this block if this score ties the previous one.
        tieCounter += 1;
        positions[index] = {
          position: positions[index - 1].position,
          score: filteredScore.finalScore
        };
      } else {
        // Fall into this block if we're not tied.
        positions[index] = {
          position: positions[index - 1].position + tieCounter,
          score: filteredScore.finalScore
        };

        tieCounter = 1; // In case the previous record was a tie.
      }
    }

    // All the position records have been built. Try to find the input
    // score in the list of records.
    const positionRecord = positions.find((p) => p.score === score.finalScore);

    return positionRecord?.position;
  } catch (err) {
    throw new ApolloError(err);
  }
};
