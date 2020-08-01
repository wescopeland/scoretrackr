import { parseNightbotUser } from './parse-nightbot-user';

describe('Util: parseNightbotUser', () => {
  it('exists', () => {
    // Assert
    expect(parseNightbotUser).toBeDefined();
  });

  it('converts a Nightbot user query string to an object', () => {
    // Arrange
    const nightbotUser =
      'name=wescopeland&displayName=WesCopeland&provider=twitch&providerId=52223868&userLevel=moderator';

    // Act
    const parsed = parseNightbotUser(nightbotUser);

    // Assert
    expect(parsed.name).toEqual('wescopeland');
    expect(parsed.displayName).toEqual('WesCopeland');
    expect(parsed.provider).toEqual('twitch');
    expect(parsed.providerId).toEqual('52223868');
    expect(parsed.userLevel).toEqual('moderator');
  });
});
