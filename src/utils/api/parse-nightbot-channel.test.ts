import { parseNightbotChannel } from './parse-nightbot-channel';

describe('Util: parseNightbotChannel', () => {
  it('exists', () => {
    // Assert
    expect(parseNightbotChannel).toBeDefined();
  });

  it('converts a Nightbot channel query string to an object', () => {
    // Arrange
    const nightbotChannel =
      'name=kongleague&displayName=KongLeague&provider=twitch&providerId=454709668';

    // Act
    const parsed = parseNightbotChannel(nightbotChannel);

    // Assert
    expect(parsed.name).toEqual('kongleague');
    expect(parsed.displayName).toEqual('KongLeague');
    expect(parsed.provider).toEqual('twitch');
    expect(parsed.providerId).toEqual('454709668');
  });
});
