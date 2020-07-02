import { formatToReadableDate } from './format-to-readable-date';
import * as GetCurrentLanguageModule from './get-current-language';

describe('Util: formatToReadableDate', () => {
  it('exists', () => {
    expect(formatToReadableDate).toBeDefined();
  });

  it('converts the input value to a date if it happens to be a string', () => {
    // Arrange
    const originalDate = '2015-05-05';

    // Act
    const formattedDate = formatToReadableDate(originalDate);

    // Assert
    expect(formattedDate).toEqual('May 4, 2015');
  });

  it('given the user is set to the default locale, returns the correct formatted readable date', () => {
    // Arrange
    const originalDate = new Date('2015-05-05');

    // Act
    const formattedDate = formatToReadableDate(originalDate);

    // Assert
    expect(formattedDate).toEqual('May 4, 2015');
  });

  it('given the user is set to the ja-JP locale, returns the correct formatted readable date', () => {
    // Arrange
    spyOn(GetCurrentLanguageModule, 'getCurrentLanguage').and.returnValue('jp');

    const originalDate = new Date('2015-05-05');

    // Act
    const formattedDate = formatToReadableDate(originalDate);

    // Assert
    expect(formattedDate).toEqual('2015年5月4日');
  });
});
