import { createConnection } from 'typeorm';

const dropDatabase = async () => {
  const connection = await createConnection('default');
  await connection.dropDatabase();
};

dropDatabase();
