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

describe('Resolver: TrackResolver', () => {
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

    const mockScore = new Score();
    mockScore.finalScore = 1218000;
    mockScore.playerAlias = 'John Smith';
    mockScore.platform = 'Arcade PCB';
    mockScore.submittedAt = new Date('2016-05-05');
    mockScore.game = mockGame;
    mockScore.track = mockTrack;

    await getRepository(Game).insert(mockGame);
    await getRepository(Track).insert(mockTrack);
    await getRepository(Score).insert(mockScore);
  });

  afterEach(async () => {
    const connection = getConnection();
    await connection.close();
  });

  it('exists', () => {
    expect(TrackResolver).toBeDefined();
  });

  it('can retrieve a track by the game id', async () => {
    // ARRANGE
    const { query } = createTestClient(apolloServer);

    const GET_TRACKS_BY_GAME_ID = gql`
      query GetTrackByGameId {
        tracksByGameId(gameId: "dkong") {
          name
          friendlyId
        }
      }
    `;

    // ACT
    const response = await query({ query: GET_TRACKS_BY_GAME_ID });
    const tracksByGameId: Track[] = response.data.tracksByGameId;

    // ASSERT
    expect(tracksByGameId).toBeTruthy();
    expect(tracksByGameId).toHaveLength(1);
    expect(tracksByGameId[0].name).toEqual('Factory settings');
    expect(tracksByGameId[0].friendlyId).toEqual('factorySettings');
  });

  it('can get the submission count of a given track', async () => {
    // ARRANGE
    const { query } = createTestClient(apolloServer);

    const GET_SUBMISSION_COUNT_OF_TRACK = gql`
      query GetSubmissionCountOfTrack {
        tracksByGameId(gameId: "dkong") {
          submissionCount
        }
      }
    `;

    // ACT
    const response = await query({ query: GET_SUBMISSION_COUNT_OF_TRACK });
    const tracksByGameId: Track[] = response.data.tracksByGameId;

    // ASSERT
    expect(tracksByGameId).toBeTruthy();
    expect(tracksByGameId).toHaveLength(1);
    expect(tracksByGameId[0].submissionCount).toEqual(1);
  });
});
