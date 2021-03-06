import { Score } from '@prisma/client';

// For the sake of position tracking, we only care
// about a player's top scores. eg: If Player A has
// scores of 800 and 700, we only care about the 800
// and want to throw the 700 point score away.
export const filterScoresByPlayerTop = (
  scores: Partial<Score>[]
): Partial<Score>[] => {
  const filteredScores: Partial<Score>[] = [];
  const trackedPlayerAliases: string[] = [];
  scores.forEach((score) => {
    const { playerAlias } = score;

    if (!trackedPlayerAliases.includes(playerAlias)) {
      trackedPlayerAliases.push(playerAlias);
      filteredScores.push(score);
    }
  });

  return filteredScores;
};
