import { parse } from 'pg-connection-string';

const databaseUrl: string = process.env.DATABASE_URL;
const connectionOptions = parse(databaseUrl);

export const production = {
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
