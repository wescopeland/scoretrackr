import { ApolloServer } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import * as admin from 'firebase-admin';
import gql from 'graphql-tag';
import { exposeMockFirebaseAdminApp, MockTimestamp } from 'ts-mock-firebase';

import { SubmissionBlob } from 'common/models/submission-blob.model';
import { gqlResolvers } from 'server/gql-resolvers';
import { gqlSchema } from 'server/gql-schema';
import { recentSubmissionsQuery } from './recent-submissions.query';

const firebaseApp = admin.initializeApp({});
const mockedDb = exposeMockFirebaseAdminApp(firebaseApp);

const apollo = new ApolloServer({
  typeDefs: gqlSchema,
  resolvers: gqlResolvers,
  introspection: true
});

const mockGameOne = {
  color: 'red',
  friendlyId: 'gameOne',
  name: 'Game One'
};

const mockGameTwo = {
  color: 'blue',
  friendlyId: 'gameTwo',
  name: 'Game Two'
};

const mockTrack = {
  name: 'Factory settings',
  friendlyId: 'factorySettings'
};

describe('GraphQL Query: recentSubmissionsQuery', () => {
  afterEach(() => {
    mockedDb.firestore().mocker.reset();
  });

  it('exists', () => {
    expect(recentSubmissionsQuery).toBeDefined();
  });

  it('returns an array of submission blobs', async () => {
    // Arrange
    mockedDb.firestore().mocker.loadCollection('games', {
      gameOne: mockGameOne,
      gameTwo: mockGameTwo
    });

    mockedDb.firestore().mocker.loadCollection('games/gameOne/tracks', {
      trackOne: mockTrack
    });

    mockedDb.firestore().mocker.loadCollection('games/gameTwo/tracks', {
      trackOne: mockTrack
    });

    mockedDb.firestore().mocker.loadCollection('scores', {
      scoreOne: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'Steve Wiebe',
        finalScore: 1190400,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(1494153123, 0)
      },
      scoreTwo: {
        _gameRef: mockedDb.firestore().doc('games/gameTwo'),
        _trackRef: mockedDb.firestore().doc('games/gameTwo/tracks/trackOne'),
        playerAlias: 'Wes Copeland',
        finalScore: 1218000,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(1493153123, 0)
      }
    });

    const { query } = createTestClient(apollo as any);

    const GET_RECENT_SUBMISSIONS = gql`
      query GetRecentSubmissions {
        recentSubmissions(limitToDays: 2) {
          date
          submissions {
            playerAlias
            finalScore
            position
            game {
              name
              friendlyId
            }
            track {
              name
              friendlyId
            }
          }
        }
      }
    `;

    // Act
    const response = await query({ query: GET_RECENT_SUBMISSIONS });
    const recentSubmissions: SubmissionBlob[] = response.data.recentSubmissions;

    // Assert
    expect(recentSubmissions).toBeTruthy();
    expect(recentSubmissions).toHaveLength(2);
    expect(recentSubmissions[0].submissions).toBeTruthy();
    expect(recentSubmissions[0].submissions[0]).toEqual({
      finalScore: 1190400,
      game: {
        friendlyId: 'gameOne',
        name: 'Game One'
      },
      playerAlias: 'Steve Wiebe',
      position: 1,
      track: {
        friendlyId: 'factorySettings',
        name: 'Factory settings'
      }
    });
  });

  it('uses a position field resolver to calculate the position number correctly', async () => {
    // Arrange
    mockedDb.firestore().mocker.loadCollection('games', {
      gameOne: mockGameOne
    });

    mockedDb.firestore().mocker.loadCollection('games/gameOne/tracks', {
      trackOne: mockTrack
    });

    mockedDb.firestore().mocker.loadCollection('scores', {
      scoreOne: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'Steve Wiebe',
        finalScore: 400,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(1494153123, 0)
      },
      scoreTwo: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'John Smith',
        finalScore: 300,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(1493153123, 0)
      },
      scoreThree: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'John Doe',
        finalScore: 200,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(1492153123, 0)
      },
      scoreFour: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'Jane Doe',
        finalScore: 100,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(1491153123, 0)
      }
    });

    const { query } = createTestClient(apollo as any);

    const GET_RECENT_SUBMISSIONS = gql`
      query GetRecentSubmissions {
        recentSubmissions(limitToDays: 4) {
          date
          submissions {
            position
          }
        }
      }
    `;

    // Act
    const response = await query({ query: GET_RECENT_SUBMISSIONS });
    const recentSubmissions: SubmissionBlob[] = response.data.recentSubmissions;

    // Assert
    expect(recentSubmissions).toHaveLength(4);
    expect(recentSubmissions[0].submissions[0].position).toEqual(1);
    expect(recentSubmissions[1].submissions[0].position).toEqual(2);
    expect(recentSubmissions[2].submissions[0].position).toEqual(3);
    expect(recentSubmissions[3].submissions[0].position).toEqual(4);
  });

  it('uses a position field resolver to correctly calculate positions when there are ties', async () => {
    mockedDb.firestore().mocker.loadCollection('games', {
      gameOne: mockGameOne
    });

    mockedDb.firestore().mocker.loadCollection('games/gameOne/tracks', {
      trackOne: mockTrack
    });

    mockedDb.firestore().mocker.loadCollection('scores', {
      scoreOne: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'Steve Wiebe',
        finalScore: 400,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(1494153123, 0)
      },
      scoreTwo: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'John Smith',
        finalScore: 300,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(1493153123, 0)
      },
      scoreThree: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'John Doe',
        finalScore: 300,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(1492153123, 0)
      },
      scoreFour: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        playerAlias: 'Jane Doe',
        finalScore: 100,
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(1491153123, 0)
      }
    });

    const { query } = createTestClient(apollo as any);

    const GET_RECENT_SUBMISSIONS = gql`
      query GetRecentSubmissions {
        recentSubmissions(limitToDays: 4) {
          date
          submissions {
            position
          }
        }
      }
    `;

    // Act
    const response = await query({ query: GET_RECENT_SUBMISSIONS });
    const recentSubmissions: SubmissionBlob[] = response.data.recentSubmissions;

    // Assert
    expect(recentSubmissions).toHaveLength(4);
    expect(recentSubmissions[0].submissions[0].position).toEqual(1);
    expect(recentSubmissions[1].submissions[0].position).toEqual(2);
    expect(recentSubmissions[2].submissions[0].position).toEqual(2);
    expect(recentSubmissions[3].submissions[0].position).toEqual(4);
  });
});
