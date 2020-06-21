import { QuerySnapshot } from '@google-cloud/firestore';
import { DBScore } from 'server/api/+models';

// For the sake of position tracking, we only care
// about a player's top scores. eg: If Player A has
// scores of 800 and 700, we only care about the 800
// and want to throw the 700 point score away.
export const filterScoresByPlayerTop = (
  scoresSnapshot: QuerySnapshot
): Partial<DBScore>[] => {
  const trackedPlayerAliases: string[] = [];

  // Make sure all the input scores are sorted.
  let retrievedScores: DBScore[] = [];
  scoresSnapshot.docs.forEach((scoreDoc) => {
    retrievedScores.push(scoreDoc.data() as DBScore);
  });

  retrievedScores = retrievedScores.sort((a, b) =>
    a.finalScore < b.finalScore ? 1 : -1
  );

  const filteredScores: Partial<DBScore>[] = [];
  retrievedScores.forEach((score) => {
    const { playerAlias } = score;

    if (!trackedPlayerAliases.includes(playerAlias)) {
      trackedPlayerAliases.push(playerAlias);
      filteredScores.push(score);
    }
  });

  return filteredScores;
};
