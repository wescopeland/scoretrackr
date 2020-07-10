import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { ConnectionOptions, createConnection, getConnection } from 'typeorm';

import {
  GameEntity,
  ScoreEntity,
  TrackEntity,
  UserEntity,
  VerificationTokenEntity
} from 'common/entities';
import { local } from './db/connections/local';
import { getProductionConnection } from './db/connections/production';
import {
  GameResolver,
  RecentSubmissionsResolver,
  ScoreResolver,
  TrackLeaderboardResolver,
  TrackResolver
} from './resolvers';

const envConnectionOptions = process.env.DATABASE_URL
  ? getProductionConnection()
  : local;

const connectionOptions = {
  ...envConnectionOptions,
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: [
    GameEntity,
    ScoreEntity,
    TrackEntity,
    UserEntity,
    VerificationTokenEntity
  ]
};

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

  try {
    const connection = getConnection();

    if (!connection.isConnected) {
      await createConnection(connectionOptions as ConnectionOptions);
    }
  } catch (err) {
    // When connecting to prod, the getConnection() function
    // will always throw. Thus, we'll fall into this catch block
    // and successfully connect to the production database.
    await createConnection(connectionOptions as ConnectionOptions);
  }

  return apollo;
};
