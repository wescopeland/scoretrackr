import { QuerySnapshot } from '@google-cloud/firestore';
import { ApolloError } from 'apollo-server';

import { DBScore } from 'server/api/+models';
import { db } from 'server/firebase-admin-app';

interface PositionRecord {
  position: number;
  score: number;
}

// For the sake of position tracking, we only care
// about a player's top scores. eg: If Player A has
// scores of 800 and 700, we only care about the 800
// and want to throw the 700 point score away.
function onlyGetPlayerTopScores(
  scoresSnapshot: QuerySnapshot
): Partial<DBScore>[] {
  const filteredScores: Partial<DBScore>[] = [];

  const trackedPlayerAliases: string[] = [];

  for (const scoreDocument of scoresSnapshot.docs) {
    const { playerAlias } = scoreDocument.data() as DBScore;

    if (!trackedPlayerAliases.includes(playerAlias)) {
      trackedPlayerAliases.push(playerAlias);
      filteredScores.push(scoreDocument.data());
    }
  }

  return filteredScores;
}

export const positionFieldResolver = async (score: DBScore) => {
  try {
    const allTrackScores = await db
      .firestore()
      .collection('scores')
      .where('_trackRef', '==', score._trackRef)
      .orderBy('finalScore', 'desc')
      .get(); // => [500, 400, 400, 300, 200, 100] -> (1, 2, 2, 4, 5, 6)

    const filteredScores = onlyGetPlayerTopScores(allTrackScores);

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

    return positionRecord.position;
  } catch (err) {
    throw new ApolloError(err);
  }
};
