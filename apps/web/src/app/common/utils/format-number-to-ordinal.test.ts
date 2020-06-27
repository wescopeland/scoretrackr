import { formatNumberToOrdinal } from './format-number-to-ordinal';

describe('Util: formatNumberToOrdinal', () => {
  it('exists', () => {
    // Assert
    expect(formatNumberToOrdinal).toBeDefined();
  });

  it('given a number, formats it to an ordinal string', () => {
    // Act
    const ordinal = formatNumberToOrdinal(42);

    // Assert
    expect(ordinal).toEqual('42nd');
  });
});
