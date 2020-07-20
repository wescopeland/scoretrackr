const parse = require('pg-connection-string').parse;

let connections = [
  {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.LOCAL_DB_USERNAME,
    password: process.env.LOCAL_DB_PASSWORD,
    database: 'scoretrackr',
    synchronize: true,
    entities: ['src/entities/**/*.entity.ts'],
    cli: {
      entitiesDir: 'src/entities'
    }
  }
];

module.exports = connections;
