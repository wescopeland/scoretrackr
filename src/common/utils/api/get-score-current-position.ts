import { DocumentReference } from '@google-cloud/firestore';

import { filterScoresByPlayerTop } from 'common/utils/api';
import { DBTrack } from 'server/api/+models';
import { db } from 'server/firebase-admin-app';

interface PositionRecord {
  position: number;
  score: number;
}

export async function getScoreCurrentPosition(
  score: number,
  trackRef: DocumentReference<DBTrack>
) {
  const allTrackScoresSnapshot = await db
    .firestore()
    .collection('scores')
    .where('_trackRef', '==', trackRef)
    .orderBy('finalScore', 'desc')
    .get(); // => [500, 400, 400, 300, 200, 100] -> (1, 2, 2, 4, 5, 6)

  // We only want to consider personal bests, as
  // these are the scores actually going onto the leaderboard.
  const filteredScores = filterScoresByPlayerTop(allTrackScoresSnapshot);

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
  const positionRecord = positions.find((p) => p.score === score);

  // If the input score wasn't found, return null.
  return positionRecord?.position || null;
}
