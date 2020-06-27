import { ConnectionOptions } from 'typeorm';

export const local: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'wescopeland',
  password: 'wescopeland',
  database: 'scoretrackr',
  synchronize: true,
  logging: false
};
