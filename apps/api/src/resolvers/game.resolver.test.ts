import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { buildSchema } from 'type-graphql';

import { GameResolver } from './game.resolver';
import { TrackResolver } from './track.resolver';
import { Game, Score, Track } from '@scoretrackr/data-access-entities';

describe('Resolver: GameResolver', () => {
  let apolloServer;

  beforeEach(async () => {
    await createConnection({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [Game, Score, Track],
      synchronize: true,
      logging: false
    });

    const schema = await buildSchema({
      resolvers: [GameResolver, TrackResolver]
    });

    apolloServer = new ApolloServer({ schema });

    const mockGame = new Game();
    mockGame.id = 'dkong3';
    mockGame.color = 'yellow';
    mockGame.name = 'Donkey Kong 3';

    const mockTrackOne = new Track();
    mockTrackOne.id = '1';
    mockTrackOne.name = 'Difficulty 3 - Marathon';
    mockTrackOne.friendlyId = 'd3marathon';
    mockTrackOne.game = mockGame;

    const mockTrackTwo = new Track();
    mockTrackTwo.id = '2';
    mockTrackTwo.name = 'Difficulty 3 - Tournament';
    mockTrackTwo.friendlyId = 'd3tgts';
    mockTrackTwo.game = mockGame;

    const mockScoreOne = new Score();
    mockScoreOne.finalScore = 16000;
    mockScoreOne.playerAlias = 'Mark Meadows';
    mockScoreOne.platform = 'Arcade PCB';
    mockScoreOne.submittedAt = new Date('2016-05-05');
    mockScoreOne.game = mockGame;
    mockScoreOne.track = mockTrackOne;

    const mockScoreTwo = new Score();
    mockScoreTwo.finalScore = 16000;
    mockScoreTwo.playerAlias = 'John Smith';
    mockScoreTwo.platform = 'Arcade PCB';
    mockScoreTwo.submittedAt = new Date('2016-05-05');
    mockScoreTwo.game = mockGame;
    mockScoreTwo.track = mockTrackOne;

    await getRepository(Game).insert(mockGame);
    await getRepository(Track).insert(mockTrackOne);
    await getRepository(Track).insert(mockTrackTwo);
    await getRepository(Score).insert(mockScoreOne);
    await getRepository(Score).insert(mockScoreTwo);
  });

  afterEach(async () => {
    const connection = getConnection();
    await connection.close();
  });

  it('exists', () => {
    expect(GameResolver).toBeDefined();
  });

  it('can retrieve the game name', async () => {
    // ARRANGE
    const { query } = createTestClient(apolloServer);

    const GET_GAME_NAME = gql`
      query GetGameName {
        game(id: "dkong3") {
          name
        }
      }
    `;

    // ACT
    const response = await query({ query: GET_GAME_NAME });
    const game: Game = response.data.game;

    // ASSERT
    expect(game.name).toEqual('Donkey Kong 3');
  });

  it('can retrieve the game color', async () => {
    // ARRANGE
    const { query } = createTestClient(apolloServer);

    const GET_GAME_COLOR = gql`
      query GetGameColor {
        game(id: "dkong3") {
          color
        }
      }
    `;

    // ACT
    const response = await query({ query: GET_GAME_COLOR });
    const game: Game = response.data.game;

    // ASSERT
    expect(game.color).toEqual('yellow');
  });

  it("can retrieve the game's tracks", async () => {
    // ARRANGE
    const { query } = createTestClient(apolloServer);

    const GET_GAME_TRACKS = gql`
      query GetGameTracks {
        game(id: "dkong3") {
          tracks {
            name
            friendlyId
            submissionCount
          }
        }
      }
    `;

    // ACT
    const response = await query({ query: GET_GAME_TRACKS });
    const game: Game = response.data.game;

    // ASSERT
    expect(game.tracks).toBeTruthy();
    expect(game.tracks).toHaveLength(2);
    expect(game.tracks[0].name).toEqual('Difficulty 3 - Marathon');
    expect(game.tracks[0].friendlyId).toEqual('d3marathon');
    expect(game.tracks[0].submissionCount).toEqual(2);
  });
});
