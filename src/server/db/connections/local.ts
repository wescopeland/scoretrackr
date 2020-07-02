import { ConnectionOptions } from 'typeorm';

export const local: Partial<ConnectionOptions> = {
  name: 'default',
  host: 'localhost',
  port: 5432,
  username: process.env.LOCAL_DB_USERNAME,
  password: process.env.LOCAL_DB_PASSWORD,
  database: 'scoretrackr'
};
