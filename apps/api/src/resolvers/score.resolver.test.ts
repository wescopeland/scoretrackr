import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { buildSchema } from 'type-graphql';

import { GameResolver } from './game.resolver';
import { ScoreResolver } from './score.resolver';
import { TrackResolver } from './track.resolver';
import { Score } from '../entity/score.entity';
import { Track } from '../entity/track.entity';
import { Game } from '../entity/game.entity';

describe('Resolver: ScoreResolver', () => {
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
      resolvers: [GameResolver, ScoreResolver, TrackResolver]
    });

    apolloServer = new ApolloServer({ schema });

    const mockGame = new Game();
    mockGame.id = 'dkong';
    mockGame.color = '#da3448';
    mockGame.name = 'Donkey Kong';

    const mockTrack = new Track();
    mockTrack.id = '1';
    mockTrack.name = 'Factory settings';
    mockTrack.friendlyId = 'factorySettings';
    mockTrack.game = mockGame;

    const mockScoreOne = new Score();
    mockScoreOne.id = '1';
    mockScoreOne.finalScore = 500;
    mockScoreOne.playerAlias = 'Player A';
    mockScoreOne.platform = 'Arcade PCB';
    mockScoreOne.submittedAt = new Date('2016-05-05');
    mockScoreOne.game = mockGame;
    mockScoreOne.track = mockTrack;

    const mockScoreTwo = new Score();
    mockScoreTwo.id = '2';
    mockScoreTwo.finalScore = 400;
    mockScoreTwo.playerAlias = 'Player B';
    mockScoreTwo.platform = 'Arcade PCB';
    mockScoreTwo.submittedAt = new Date('2016-05-05');
    mockScoreTwo.game = mockGame;
    mockScoreTwo.track = mockTrack;

    const mockScoreThree = new Score();
    mockScoreThree.id = '3';
    mockScoreThree.finalScore = 400;
    mockScoreThree.playerAlias = 'Player C';
    mockScoreThree.platform = 'Arcade PCB';
    mockScoreThree.submittedAt = new Date('2017-05-05');
    mockScoreThree.game = mockGame;
    mockScoreThree.track = mockTrack;

    const mockScoreFour = new Score();
    mockScoreFour.id = '4';
    mockScoreFour.finalScore = 300;
    mockScoreFour.playerAlias = 'Player D';
    mockScoreFour.platform = 'Arcade PCB';
    mockScoreFour.submittedAt = new Date('2016-05-05');
    mockScoreFour.game = mockGame;
    mockScoreFour.track = mockTrack;

    const mockScoreFive = new Score();
    mockScoreFive.id = '5';
    mockScoreFive.finalScore = 100;
    mockScoreFive.playerAlias = 'Player C';
    mockScoreFive.platform = 'Arcade PCB';
    mockScoreFive.submittedAt = new Date('2016-05-05');
    mockScoreFive.game = mockGame;
    mockScoreFive.track = mockTrack;

    await getRepository(Game).insert(mockGame);
    await getRepository(Track).insert(mockTrack);
    await getRepository(Score).insert([
      mockScoreOne,
      mockScoreTwo,
      mockScoreThree,
      mockScoreFour,
      mockScoreFive
    ]);
  });

  afterEach(async () => {
    const connection = getConnection();
    await connection.close();
  });

  it('exists', () => {
    expect(ScoreResolver).toBeDefined();
  });

  it('can retrieve information about a score given its id', async () => {
    // ARRANGE
    const { query } = createTestClient(apolloServer);

    const GET_SCORE = gql`
      query GetScore {
        score(id: "3") {
          finalScore
          submittedAt
          game {
            name
          }
          track {
            name
            friendlyId
          }
        }
      }
    `;

    // ACT
    const response = await query({ query: GET_SCORE });
    const score: Score = response.data.score;

    // ASSERT
    expect(score).toBeTruthy();
    expect(score.finalScore).toEqual(400);
    expect(score.submittedAt).toEqual('2017-05-05T00:00:00.000Z');
    expect(score.game.name).toEqual('Donkey Kong');
    expect(score.track.name).toEqual('Factory settings');
    expect(score.track.friendlyId).toEqual('factorySettings');
  });

  it('can retrieve the position of the score on its track relative to today', async () => {
    // ARRANGE
    const { query } = createTestClient(apolloServer);

    const GET_SCORE_POSITION = gql`
      query GetScorePosition {
        score(id: "4") {
          position
        }
      }
    `;

    // ACT
    const response = await query({ query: GET_SCORE_POSITION });
    const score: Score = response.data.score;

    // ASSERT
    expect(score).toBeTruthy();
    expect(score.position).toEqual(4);
  });

  it('can retrieve the position of the score on its track relative to a given date', async () => {
    // ARRANGE
    const { query } = createTestClient(apolloServer);

    const GET_SCORE_POSITION_ON_DATE = gql`
      query GetScorePositionOnDate {
        score(id: "4") {
          position(onDate: "2016-10-10")
        }
      }
    `;

    // ACT
    const response = await query({ query: GET_SCORE_POSITION_ON_DATE });
    const score: Score = response.data.score;

    // ASSERT
    expect(score).toBeTruthy();
    expect(score.position).toEqual(3);
  });
});
