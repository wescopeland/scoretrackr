import { createMocks } from 'node-mocks-http';

import ping from '~/pages/api/ping';

describe('Api Endpoint: ping', () => {
  it('exists', () => {
    expect(ping).toBeDefined();
  });

  it('responds with some ping text', async () => {
    // Arrange
    const { req, res } = createMocks({ method: 'GET' });

    // Act
    await ping(req, res);

    // Assert
    expect(res._getStatusCode()).toEqual(200);
    expect(res._getData()).toEqual('Ping!');
  });
});
