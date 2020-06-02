import { formatDistanceToNow } from './format-distance-to-now';
import * as GetCurrentLanguageModule from './get-current-language';

describe('Util: formatDistanceToNow', () => {
  it('exists', () => {
    // Assert
    expect(formatDistanceToNow).toBeDefined();
  });

  it('given a date, returns a string saying how far away the date is', () => {
    // Arrange
    spyOn(global.Date, 'now').and.returnValue(
      new Date('2020-06-02T11:01:58.135Z')
    );

    const date = new Date('06-29-1989');

    // Act
    const formattedDate = formatDistanceToNow(date);

    // Assert
    expect(formattedDate).toEqual('almost 31 years ago');
  });

  it('can localize the returned string', () => {
    // Arrange
    spyOn(global.Date, 'now').and.returnValue(
      new Date('2020-06-02T11:01:58.135Z')
    );

    spyOn(GetCurrentLanguageModule, 'getCurrentLanguage').and.returnValue('jp');

    const date = new Date('06-29-1989');

    // Act
    const formattedDate = formatDistanceToNow(date);

    // Assert
    expect(formattedDate).toEqual('31年近く前');
  });
});
