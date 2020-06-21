import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import * as admin from 'firebase-admin';
import { exposeMockFirebaseAdminApp, MockTimestamp } from 'ts-mock-firebase';

import { Score } from 'common/models/score.model';
import { gqlResolvers } from 'server/gql-resolvers';
import { gqlSchema } from 'server/gql-schema';
import { trackLeaderboardQuery } from './track-leaderboard.query';

const firebaseApp = admin.initializeApp({});
const mockedDb = exposeMockFirebaseAdminApp(firebaseApp);

const apollo = new ApolloServer({
  typeDefs: gqlSchema,
  resolvers: gqlResolvers,
  introspection: true
});

const createMockScore = (
  playerAlias: string,
  finalScore: number,
  submittedAt: Date
) => {
  return {
    playerAlias,
    finalScore,
    submittedAt: new MockTimestamp(submittedAt.getTime() / 1000, 0),
    _gameRef: mockedDb.firestore().doc('games/gameOne'),
    _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/gameOneTrackOne'),
    platform: 'Arcade PCB',
    trackId: 'gameOneTrackOne'
  };
};

describe('GraphQL Query: trackLeaderboardQuery', () => {
  beforeEach(() => {
    mockedDb.firestore().mocker.reset();

    mockedDb.firestore().mocker.loadCollection('games', {
      gameOne: {
        color: 'red',
        friendlyId: 'dkong',
        name: 'Donkey Kong'
      }
    });

    mockedDb.firestore().mocker.loadCollection('games/gameOne/tracks', {
      gameOneTrackOne: {
        name: 'Factory settings',
        friendlyId: 'factorySettings'
      }
    });

    mockedDb.firestore().mocker.loadCollection('scores', {
      scoreOne: createMockScore('Mark Meadows', 16000, new Date('06-06-2015')),
      scoreTwo: createMockScore('Mark Meadows', 100, new Date('03-03-2013')),
      scoreThree: createMockScore('John Smith', 25000, new Date('05-05-2015')),
      scoreFour: createMockScore('Jane Smith', 16000, new Date('06-06-2015')),
      scoreFive: createMockScore('Bart Simpson', 800, new Date('06-06-2012')),
      scoreSix: createMockScore('Lisa Simpson', 700, new Date('06-06-2012'))
    });
  });

  it('exists', () => {
    expect(trackLeaderboardQuery).toBeDefined();
  });

  it('can retrieve the current leaderboard for a given track', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_LEADERBOARD = gql`
      query GetLeaderboard {
        trackLeaderboard(trackId: "gameOneTrackOne") {
          playerAlias
          finalScore
          position
          submittedAt
        }
      }
    `;

    // Act
    const response = await query({ query: GET_LEADERBOARD });
    const trackLeaderboard: Score[] = response.data.trackLeaderboard;

    // Assert
    expect(trackLeaderboard).toBeTruthy();
    expect(trackLeaderboard).toHaveLength(5);
    expect(
      trackLeaderboard.filter((s) => s.playerAlias === 'Mark Meadows')
    ).toHaveLength(1);
    expect(trackLeaderboard[0].position).toEqual(1);
    expect(trackLeaderboard[1].position).toEqual(2);
    expect(trackLeaderboard[2].position).toEqual(2);
    expect(trackLeaderboard[3].position).toEqual(4);
    expect(trackLeaderboard[4].position).toEqual(5);
  });

  test.todo('can retrieve the leaderboard for a track on a given date');
});
