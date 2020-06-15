import express from 'express';
import request from 'supertest';

import ping from './index';

const server = express();
server.use('/ping', ping);

describe('Api Endpoint: ping', () => {
  it('exists', () => {
    // Assert
    expect(ping).toBeDefined();
  });

  describe('GET', () => {
    it('returns some ping text to indicate the express server is alive', async () => {
      // Act
      const getResponse = await request(server).get('/ping');

      // Assert
      expect(getResponse.status).toEqual(200);
      expect(getResponse.text).toEqual('Ping!');
    });
  });

  describe('Other Methods', () => {
    it('returns a 405', async () => {
      // Act
      const postResponse = await request(server).post('/ping');
      const putResponse = await request(server).put('/ping');
      const deleteResponse = await request(server).delete('/ping');

      // Assert
      expect(postResponse.status).toEqual(405);
      expect(putResponse.status).toEqual(405);
      expect(deleteResponse.status).toEqual(405);
    });
  });
});
