import { Score } from '@prisma/client';

interface PositionRecord {
  position: number;
  score: number;
}

const getLeaderboardFromScores = (allTrackScores: Partial<Score>[]) => {
  const positions: PositionRecord[] = [];
  let tieCounter = 1;

  for (const [index, score] of allTrackScores.entries()) {
    if (index === 0) {
      positions[index] = { position: 1, score: score.finalScore };
    } else if (positions[index - 1].score === score.finalScore) {
      // Fall into this block if this score ties the previous one.
      tieCounter += 1;
      positions[index] = {
        position: positions[index - 1].position,
        score: score.finalScore
      };
    } else {
      // Fall into this block if we're not tied.
      positions[index] = {
        position: positions[index - 1].position + tieCounter,
        score: score.finalScore
      };

      tieCounter = 1; // In case the previous record was a tie.
    }
  }

  return positions;
};

export const getScorePosition = (
  score: Partial<Score>,
  allTrackScores: Partial<Score>[]
) => {
  const leaderboard = getLeaderboardFromScores(allTrackScores);

  // All the position records have been built. Try to find the
  // input score in the list of position records.
  const positionRecord = leaderboard.find((p) => p.score === score.finalScore);

  return positionRecord?.position ?? null;
};
