import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { createConnection, getConnection } from 'typeorm';

import { Game, Score, Track } from 'common/entity';
import { local } from './db-connections/local';
import {
  GameResolver,
  RecentSubmissionsResolver,
  ScoreResolver,
  TrackLeaderboardResolver,
  TrackResolver
} from './resolvers';

export const createApiServer = async () => {
  const schema = await buildSchema({
    resolvers: [
      GameResolver,
      RecentSubmissionsResolver,
      ScoreResolver,
      TrackLeaderboardResolver,
      TrackResolver
    ]
  });

  const apollo = new ApolloServer({ schema });

  const connection = getConnection();
  if (!connection.isConnected) {
    createConnection({
      ...local,
      entities: [Game, Score, Track]
    });
  }

  return apollo;
};
