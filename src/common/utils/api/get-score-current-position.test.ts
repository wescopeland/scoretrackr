import * as admin from 'firebase-admin';
import { exposeMockFirebaseAdminApp, MockTimestamp } from 'ts-mock-firebase';

import { getScoreCurrentPosition } from './get-score-current-position';

const firebaseApp = admin.initializeApp({});
const mocked = exposeMockFirebaseAdminApp(firebaseApp);

describe('Util: getScoreCurrentPosition', () => {
  beforeEach(() => {
    mocked.firestore().mocker.reset();

    mocked.firestore().mocker.loadCollection('games', {
      gameOne: {
        color: 'red',
        friendlyId: 'gameOne',
        name: 'Game One'
      }
    });

    mocked.firestore().mocker.loadCollection('games/gameOne/tracks', {
      trackOne: {
        name: 'Factory settings'
      }
    });
  });

  it('exists', () => {
    // Assert
    expect(getScoreCurrentPosition).toBeDefined();
  });

  it('returns positions for score documents (1st, 2nd, 3rd, 4th, etc.)', async () => {
    // Arrange
    mocked.firestore().mocker.loadCollection('scores', {
      scoreOne: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasOne',
        finalScore: 1000,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      },
      scoreTwo: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasTwo',
        finalScore: 900,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      },
      scoreThree: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasThree',
        finalScore: 800,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      }
    });

    // Act
    const thousandPointsPosition = await getScoreCurrentPosition(
      1000,
      mocked.firestore().doc('games/gameOne/tracks/trackOne') as any
    );

    const nineHundredPointsPosition = await getScoreCurrentPosition(
      900,
      mocked.firestore().doc('games/gameOne/tracks/trackOne') as any
    );

    const eightHundredPointsPosition = await getScoreCurrentPosition(
      800,
      mocked.firestore().doc('games/gameOne/tracks/trackOne') as any
    );

    // Assert
    expect(thousandPointsPosition).toEqual(1);
    expect(nineHundredPointsPosition).toEqual(2);
    expect(eightHundredPointsPosition).toEqual(3);
  });

  it('throws away lower scores from the same player in the position calculation', async () => {
    // Arrange
    mocked.firestore().mocker.loadCollection('scores', {
      scoreOne: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasOne',
        finalScore: 1000,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      },
      scoreTwo: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasTwo',
        finalScore: 900,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      },
      scoreThree: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasTwo',
        finalScore: 800,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      },
      scoreFour: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasThree',
        finalScore: 700,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      }
    });

    // Act
    const thousandPointsPosition = await getScoreCurrentPosition(
      1000,
      mocked.firestore().doc('games/gameOne/tracks/trackOne') as any
    );

    const nineHundredPointsPosition = await getScoreCurrentPosition(
      900,
      mocked.firestore().doc('games/gameOne/tracks/trackOne') as any
    );

    const eightHundredPointsPosition = await getScoreCurrentPosition(
      800,
      mocked.firestore().doc('games/gameOne/tracks/trackOne') as any
    );

    const sevenHundredPointsPosition = await getScoreCurrentPosition(
      700,
      mocked.firestore().doc('games/gameOne/tracks/trackOne') as any
    );

    // Assert
    // This is a lower score from the same player; throw it away.
    expect(eightHundredPointsPosition).toEqual(null);

    expect(thousandPointsPosition).toEqual(1);
    expect(nineHundredPointsPosition).toEqual(2);
    expect(sevenHundredPointsPosition).toEqual(3);
  });

  it('correctly calculates tied positions', async () => {
    // Arrange
    mocked.firestore().mocker.loadCollection('scores', {
      scoreOne: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasOne',
        finalScore: 1000,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      },
      scoreTwo: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasTwo',
        finalScore: 900,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      },
      scoreThree: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasThree',
        finalScore: 900,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      },
      scoreFour: {
        _gameRef: mocked.firestore().doc('games/gameOne'),
        _trackRef: mocked.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'playerAliasFour',
        finalScore: 800,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0)
      }
    });

    // Act
    const thousandPointsPosition = await getScoreCurrentPosition(
      1000,
      mocked.firestore().doc('games/gameOne/tracks/trackOne') as any
    );

    const nineHundredPointsPosition = await getScoreCurrentPosition(
      900,
      mocked.firestore().doc('games/gameOne/tracks/trackOne') as any
    );

    const eightHundredPointsPosition = await getScoreCurrentPosition(
      800,
      mocked.firestore().doc('games/gameOne/tracks/trackOne') as any
    );

    // Assert
    expect(thousandPointsPosition).toEqual(1);
    expect(nineHundredPointsPosition).toEqual(2);

    // Because we have two 900 points score, the next highest
    // will be position 4 instead of 3 (due to the tie).
    expect(eightHundredPointsPosition).toEqual(4);
  });
});
