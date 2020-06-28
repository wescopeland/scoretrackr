import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { buildSchema } from 'type-graphql';

import { GameResolver } from './game.resolver';
import { ScoreResolver } from './score.resolver';
import { TrackResolver } from './track.resolver';
import { TrackLeaderboardResolver } from './track-leaderboard.resolver';
import { Game, Score, Track } from '@scoretrackr/data-access-entities';

const mockGame = new Game();
mockGame.id = 'dkong';
mockGame.color = '#da3448';
mockGame.name = 'Donkey Kong';

const mockTrack = new Track();
mockTrack.id = '1';
mockTrack.name = 'Factory settings';
mockTrack.friendlyId = 'factorySettings';
mockTrack.game = mockGame;

const createMockScore = (
  id: string,
  playerAlias: string,
  finalScore: number,
  submittedAt: Date
) => {
  const score = new Score();

  score.platform = 'Arcade PCB';
  score.game = mockGame;
  score.track = mockTrack;

  score.id = id;
  score.playerAlias = playerAlias;
  score.finalScore = finalScore;
  score.submittedAt = submittedAt;

  return score;
};

describe('Resolver: TrackLeaderboardResolver', () => {
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
      resolvers: [
        GameResolver,
        ScoreResolver,
        TrackResolver,
        TrackLeaderboardResolver
      ]
    });

    apolloServer = new ApolloServer({ schema });

    await getRepository(Game).insert(mockGame);
    await getRepository(Track).insert(mockTrack);
    await getRepository(Score).insert([
      createMockScore('1', 'Mark Meadows', 16000, new Date('06-06-2015')),
      createMockScore('2', 'Mark Meadows', 100, new Date('03-03-2013')),
      createMockScore('3', 'John Smith', 25000, new Date('05-05-2015')),
      createMockScore('4', 'Jane Smith', 16000, new Date('06-06-2015')),
      createMockScore('5', 'Bart Simpson', 800, new Date('06-06-2012')),
      createMockScore('6', 'Lisa Simpson', 700, new Date('06-06-2012'))
    ]);
  });

  afterEach(async () => {
    const connection = getConnection();
    await connection.close();
  });

  it('exists', () => {
    expect(TrackLeaderboardResolver).toBeDefined();
  });

  it('can retrieve the current leaderboard for a given track', async () => {
    // ARRANGE
    const { query } = createTestClient(apolloServer);

    const GET_LEADERBOARD = gql`
      query GetLeaderboard {
        trackLeaderboard(trackId: "1") {
          playerAlias
          finalScore
          position
          submittedAt
        }
      }
    `;

    // ACT
    const response = await query({ query: GET_LEADERBOARD });
    const trackLeaderboard: Score[] = response.data.trackLeaderboard;

    // ASSERT
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
});
