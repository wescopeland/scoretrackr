import { Score } from '@prisma/client';

import { getScorePosition } from './get-score-position';

describe('Util: getScorePosition', () => {
  it('exists', () => {
    // ASSERT
    expect(getScorePosition).toBeDefined();
  });

  it('finds a score position on a leaderboard with no ties', () => {
    // Arrange
    const leaderboard: Partial<Score>[] = [
      {
        id: 'scoreOne',
        finalScore: 1000,
        playerAlias: 'Score One Player',
        platform: 'Arcade PCB'
      },
      {
        id: 'scoreTwo',
        finalScore: 900,
        playerAlias: 'Score Two Player',
        platform: 'Arcade PCB'
      },
      {
        id: 'scoreThree',
        finalScore: 800,
        playerAlias: 'Score Three Player',
        platform: 'Emulator'
      }
    ];

    // Act
    const position = getScorePosition(leaderboard[1], leaderboard);

    // Assert
    expect(position).toEqual(2);
  });

  it('finds score positions on leaderboards that have ties', () => {
    // Arrange
    const leaderboard: Partial<Score>[] = [
      {
        id: 'scoreOne',
        finalScore: 1000,
        playerAlias: 'Score One Player',
        platform: 'Arcade PCB'
      },
      {
        id: 'scoreTwo',
        finalScore: 900,
        playerAlias: 'Score Two Player',
        platform: 'Arcade PCB'
      },
      {
        id: 'scoreThree',
        finalScore: 900,
        playerAlias: 'Score Three Player',
        platform: 'Emulator'
      },
      {
        id: 'scoreFour',
        finalScore: 700,
        playerAlias: 'Score Four Player',
        platform: 'Emulator'
      }
    ];

    // Act
    const scoreOnePosition = getScorePosition(leaderboard[0], leaderboard);
    const scoreTwoPosition = getScorePosition(leaderboard[1], leaderboard);
    const scoreThreePosition = getScorePosition(leaderboard[2], leaderboard);
    const scoreFourPosition = getScorePosition(leaderboard[3], leaderboard);

    // Assert
    expect(scoreOnePosition).toEqual(1);
    expect(scoreTwoPosition).toEqual(2);
    expect(scoreThreePosition).toEqual(2);
    expect(scoreFourPosition).toEqual(4);
  });
});
