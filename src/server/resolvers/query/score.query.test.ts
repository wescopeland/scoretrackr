import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import * as admin from 'firebase-admin';
import { exposeMockFirebaseAdminApp, MockTimestamp } from 'ts-mock-firebase';

import { Score } from 'common/models/score.model';
import { gqlResolvers } from 'server/gql-resolvers';
import { gqlSchema } from 'server/gql-schema';
import { scoreQuery } from './score.query';

const firebaseApp = admin.initializeApp({});
const mockedDb = exposeMockFirebaseAdminApp(firebaseApp);

const apollo = new ApolloServer({
  typeDefs: gqlSchema,
  resolvers: gqlResolvers,
  introspection: true
});

describe('GraphQL Query: scoreQuery', () => {
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
      trackOne: {
        name: 'Factory settings',
        friendlyId: 'factorySettings'
      }
    });

    mockedDb.firestore().mocker.loadCollection('scores', {
      scoreOne: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        finalScore: 16000,
        playerAlias: 'Mark Meadows',
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0),
        trackId: 'trackOne'
      }
    });
  });

  it('exists', () => {
    expect(scoreQuery).toBeDefined();
  });

  it('can retrieve the final score value attached to the score', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_FINAL_SCORE = gql`
      query GetFinalScore {
        score(id: "scoreOne") {
          finalScore
        }
      }
    `;

    // Act
    const response = await query({ query: GET_FINAL_SCORE });
    const score: Score = response.data.score;

    // Assert
    expect(score.finalScore).toEqual(16000);
  });

  it('can retrieve the player alias attached to the score', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_PLAYER_ALIAS = gql`
      query GetPlayerAlias {
        score(id: "scoreOne") {
          playerAlias
        }
      }
    `;

    // Act
    const response = await query({ query: GET_PLAYER_ALIAS });
    const score: Score = response.data.score;

    // Assert
    expect(score.playerAlias).toEqual('Mark Meadows');
  });

  it('can retrieve the platform attached to the score', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_PLATFORM = gql`
      query GetPlatform {
        score(id: "scoreOne") {
          platform
        }
      }
    `;

    // Act
    const response = await query({ query: GET_PLATFORM });
    const score: Score = response.data.score;

    // Assert
    expect(score.platform).toEqual('Arcade PCB');
  });

  it('can retrieve the submission date attached to the score', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_SUBMITTED_AT = gql`
      query GetSubmittedAt {
        score(id: "scoreOne") {
          submittedAt
        }
      }
    `;

    // Act
    const response = await query({ query: GET_SUBMITTED_AT });
    const score: Score = response.data.score;

    // Assert
    expect(score.submittedAt).toBeTruthy();
    expect(score.submittedAt).toBeInstanceOf(Date);
  });

  it('can retrieve the game attached to the score', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_GAME = gql`
      query GetGame {
        score(id: "scoreOne") {
          game {
            name
            friendlyId
          }
        }
      }
    `;

    // Act
    const response = await query({ query: GET_GAME });
    const score: Score = response.data.score;

    // Assert
    expect(score.game).toBeTruthy();
    expect(score.game.name).toEqual('Donkey Kong');
    expect(score.game.friendlyId).toEqual('dkong');
  });

  it('can retrieve the trackId attached to the score', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_TRACK_ID = gql`
      query GetTrackId {
        score(id: "scoreOne") {
          trackId
        }
      }
    `;

    // Act
    const response = await query({ query: GET_TRACK_ID });
    const score: Score = response.data.score;

    // Assert
    expect(score.trackId).toBeTruthy();
    expect(score.trackId).toEqual('trackOne');
  });

  it('can retrieve the track attached to the score', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_TRACK = gql`
      query GetTrack {
        score(id: "scoreOne") {
          track {
            name
            friendlyId
          }
        }
      }
    `;

    // Act
    const response = await query({ query: GET_TRACK });
    const score: Score = response.data.score;

    // Assert
    expect(score.track).toBeTruthy();
    expect(score.track.name).toEqual('Factory settings');
    expect(score.track.friendlyId).toEqual('factorySettings');
  });

  describe('Errors', () => {
    it('gracefully returns an error when no score matches the input score id', async () => {
      // Arrange
      const { query } = createTestClient(apollo as any);

      const GET_SCORE = gql`
        query GetScore {
          score(id: "nonexistantScore") {
            playerAlias
            finalScore
          }
        }
      `;

      // Act
      const response = await query({ query: GET_SCORE });
      const score: Score = response.data.score;

      // Assert
      expect(score).toBeNull();
      expect(response.errors).toBeTruthy();
      expect(response.errors).toHaveLength(1);
      expect(response.errors[0].message).toEqual('Score ID not found');
    });
  });
});
