import { parse } from 'pg-connection-string';

export const getProductionConnection = () => {
  let production = {};

  if (process.env.DATABASE_URL) {
    const connectionOptions = parse(process.env.DATABASE_URL);

    production = {
      name: 'production',
      host: connectionOptions.host,
      port: Number(connectionOptions.port),
      username: connectionOptions.user,
      password: connectionOptions.password,
      database: connectionOptions.database,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    };
  }

  return production;
};
