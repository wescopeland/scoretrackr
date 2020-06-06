import express from 'express';
import request from 'supertest';

import ping from 'server/api/ping';
import { unallowedHttpMethodResponse } from './unallowed-http-method-response';

const server = express();
server.use('/ping', ping);

describe('Util: unallowedHttpMethodREsponse', () => {
  it('exists', () => {
    // Assert
    expect(unallowedHttpMethodResponse).toBeDefined();
  });

  it('returns a 405 with a message containing the allowed methods', async () => {
    // Act
    const deleteResponse = await request(server).delete('/ping');

    // Assert
    expect(deleteResponse.status).toEqual(405);
    expect(deleteResponse.text).toEqual('Method DELETE Not Allowed');
    expect(deleteResponse.header.allow).toBeDefined();
    expect(deleteResponse.header.allow).toEqual('GET');
  });
});
