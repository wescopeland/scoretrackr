import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { ConnectionOptions, createConnection, getConnection } from 'typeorm';

import { local } from './db/connections/local';
import {
  GameEntity,
  ResetPasswordTokenEntity,
  ScoreEntity,
  TrackEntity,
  UserEntity,
  VerificationTokenEntity
} from '~/entities';
import {
  GameResolver,
  RecentSubmissionsResolver,
  ScoreResolver,
  TrackLeaderboardResolver,
  TrackResolver
} from './resolvers';

const envConnectionOptions = local;

const connectionOptions = {
  ...envConnectionOptions,
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: [
    GameEntity,
    ResetPasswordTokenEntity,
    ScoreEntity,
    TrackEntity,
    UserEntity,
    VerificationTokenEntity
  ]
};

export const createApolloServer = async () => {
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
