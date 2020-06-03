import { getCurrentLanguage } from './get-current-language';

describe('Util: getCurrentLanguage', () => {
  it('exists', () => {
    // Assert
    expect(getCurrentLanguage).toBeDefined();
  });

  it('returns the globally set initial language', () => {
    // Arrange
    (globalThis as any).initialLanguage = 'some-LANGUAGE';

    // Act
    const currentLanguage = getCurrentLanguage();

    // Assert
    expect(currentLanguage).toEqual('some-LANGUAGE');
  });

  it('returns English if there is no globally set initial language', () => {
    // Arrange
    (globalThis as any).initialLanguage = 'en';

    // Act
    const currentLanguage = getCurrentLanguage();

    // Assert
    expect(currentLanguage).toEqual('en');
  });
});
