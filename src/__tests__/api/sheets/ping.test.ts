import { createMocks } from 'node-mocks-http';

import sheetsPing from '~/pages/api/sheets/ping';

// file.only

describe('Api Endpoint: sheetsPing', () => {
  it('exists', () => {
    // Assert
    expect(sheetsPing).toBeDefined();
  });

  it('responds with details about the user and channel', async () => {
    // Arrange
    const { req, res } = createMocks({
      method: 'GET',
      headers: {
        'nightbot-channel':
          'name=kongleague&displayName=KongLeague&provider=twitch&providerId=454709668',
        'nightbot-user':
          'name=wescopeland&displayName=WesCopeland&provider=twitch&providerId=52223868&userLevel=moderator'
      }
    });

    // Act
    await sheetsPing(req, res);
    const resData = res._getData();

    // Assert
    expect(resData).toContain('Your username is WesCopeland');
    expect(resData).toContain('the current channel is KongLeague');
  });
});
