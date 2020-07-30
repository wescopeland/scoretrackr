// To get around the isolated modules error thrown by tsc.
export const foo = 'bar';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

module.exports = jest.requireMock('next/link');
