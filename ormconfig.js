const parse = require('pg-connection-string').parse;

let connections = [
  {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'wescopeland',
    password: 'wescopeland',
    database: 'scoretrackr',
    synchronize: true,
    entities: ['src/common/entity/**/*.ts'],
    cli: {
      entitiesDir: 'src/common/entity'
    }
  }
];

let prodOptions;
if (process.env.DATABASE_URL) {
  prodOptions = parse(process.env.DATABASE_URL);

  connections.push({
    name: 'production',
    host: prodOptions.host,
    port: prodOptions.port,
    username: prodOptions.user,
    password: prodOptions.password,
    database: prodOptions.database,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  });
}

module.exports = connections;
