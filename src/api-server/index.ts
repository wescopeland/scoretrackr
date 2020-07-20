import bodyParser from 'body-parser';
import express from 'express';

import { createApolloServer } from './create-apollo-server';

const main = async () => {
  const port = Number(process.env.API_PORT) || 4000;

  const server = express();

  server.disable('x-powered-by');
  server.use(bodyParser.json());
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> API server ready on http://localhost:${port}`);
  });

  const apollo = await createApolloServer();
  apollo.applyMiddleware({ app: server, path: '/api/graphql' });
};

main();
