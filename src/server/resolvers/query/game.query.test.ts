import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import * as admin from 'firebase-admin';
import { exposeMockFirebaseAdminApp, MockTimestamp } from 'ts-mock-firebase';

import { Game } from 'common/models/game.model';
import { gqlResolvers } from 'server/gql-resolvers';
import { gqlSchema } from 'server/gql-schema';
import { gameQuery } from './game.query';

const firebaseApp = admin.initializeApp({});
const mockedDb = exposeMockFirebaseAdminApp(firebaseApp);

const apollo = new ApolloServer({
  typeDefs: gqlSchema,
  resolvers: gqlResolvers,
  introspection: true
});

describe('GraphQL Query: gameQuery', () => {
  beforeEach(() => {
    mockedDb.firestore().mocker.reset();

    mockedDb.firestore().mocker.loadCollection('games', {
      gameOne: {
        color: 'yellow',
        friendlyId: 'dkong3',
        name: 'Donkey Kong 3'
      }
    });

    mockedDb.firestore().mocker.loadCollection('games/gameOne/tracks', {
      trackOne: {
        name: 'Difficulty 3 - Marathon',
        friendlyId: 'd3marathon'
      },
      trackTwo: {
        name: 'Difficulty 3 - Tournament',
        friendlyId: 'd3tgts'
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
      },
      scoreTwo: {
        _gameRef: mockedDb.firestore().doc('games/gameOne'),
        _trackRef: mockedDb.firestore().doc('games/gameOne/tracks/trackOne'),
        finalScore: 16000,
        playerAlias: 'John Smith',
        platform: 'Arcade PCB',
        submittedAt: new MockTimestamp(123123123, 0),
        trackId: 'trackOne'
      }
    });
  });

  it('exists', () => {
    expect(gameQuery).toBeDefined();
  });

  it('can retrieve the game name', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_GAME_NAME = gql`
      query GetGameName {
        game(friendlyId: "dkong3") {
          name
        }
      }
    `;

    // Act
    const response = await query({ query: GET_GAME_NAME });
    const game: Game = response.data.game;

    // Assert
    expect(game.name).toEqual('Donkey Kong 3');
  });

  it('can retrieve the game color', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_GAME_COLOR = gql`
      query GetGameColor {
        game(friendlyId: "dkong3") {
          color
        }
      }
    `;

    // Act
    const response = await query({ query: GET_GAME_COLOR });
    const game: Game = response.data.game;

    // Assert
    expect(game.color).toEqual('yellow');
  });

  it('can retrieve the game id', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_GAME_ID = gql`
      query GetGameId {
        game(friendlyId: "dkong3") {
          id
        }
      }
    `;

    // Act
    const response = await query({ query: GET_GAME_ID });
    const game: Game = response.data.game;

    // Assert
    expect(game.id).toEqual('gameOne');
  });

  it('can retrieve the game friendlyId', async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_GAME_FRIENDLY_ID = gql`
      query GetGameFriendlyId {
        game(friendlyId: "dkong3") {
          friendlyId
        }
      }
    `;

    // Act
    const response = await query({ query: GET_GAME_FRIENDLY_ID });
    const game: Game = response.data.game;

    // Assert
    expect(game.friendlyId).toEqual('dkong3');
  });

  it("can retrieve the game's tracks", async () => {
    // Arrange
    const { query } = createTestClient(apollo as any);

    const GET_GAME_TRACKS = gql`
      query GetGameTracks {
        game(friendlyId: "dkong3") {
          tracks {
            name
            friendlyId
            submissionCount
          }
        }
      }
    `;

    // Act
    const response = await query({ query: GET_GAME_TRACKS });
    const game: Game = response.data.game;

    // Assert
    expect(game.tracks).toBeTruthy();
    expect(game.tracks).toHaveLength(2);
    expect(game.tracks[0].name).toEqual('Difficulty 3 - Marathon');
    expect(game.tracks[0].friendlyId).toEqual('d3marathon');
    expect(game.tracks[0].submissionCount).toEqual(2);
  });

  describe('Errors', () => {
    it('gracefully returns an error when no game matches the input friendlyId', async () => {
      // Arrange
      const { query } = createTestClient(apollo as any);

      const GET_GAME = gql`
        query GetGame {
          game(friendlyId: "intrepid") {
            name
          }
        }
      `;

      // Act
      const response = await query({ query: GET_GAME });

      // Assert
      expect(response.data.game).toBeNull();
      expect(response.errors).toBeTruthy();
      expect(response.errors).toHaveLength(1);
      expect(response.errors[0].message).toEqual('Game friendly ID not found');
    });
  });
});
