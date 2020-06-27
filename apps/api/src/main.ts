import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { local } from './connections/local';
import { entities } from './entity/entities';
import { GameResolver } from './resolvers/game.resolver';
import { RecentSubmissionsResolver } from './resolvers/recent-submissions.resolver';
import { ScoreResolver } from './resolvers/score.resolver';
import { TrackResolver } from './resolvers/track.resolver';
import { TrackLeaderboardResolver } from './resolvers/track-leaderboard.resolver';

const startServer = async () => {
  const schema = await buildSchema({
    resolvers: [
      GameResolver,
      RecentSubmissionsResolver,
      ScoreResolver,
      TrackResolver,
      TrackLeaderboardResolver
    ]
  });

  const server = new ApolloServer({ schema });

  createConnection({
    ...local,
    entities
  });

  await server.listen(4000);
  console.log('Server has started!');
};

startServer();
