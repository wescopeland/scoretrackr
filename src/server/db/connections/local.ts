import { ConnectionOptions } from 'typeorm';

export const local: Partial<ConnectionOptions> = {
  name: 'default',
  host: 'localhost',
  port: 5432,
  username: 'wescopeland',
  password: 'wescopeland',
  database: 'scoretrackr'
};
