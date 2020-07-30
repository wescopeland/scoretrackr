// To get around the isolated modules error thrown by tsc.
export const foo = 'bar';

jest.mock('next/router', () => ({
  // spread out all "Router" exports
  ...jest.requireActual('next/router'),

  // shallow merge the "default" exports with...
  default: {
    // all actual "default" exports...
    ...jest.requireActual('next/router').default,

    // and overwrite push and replace to be jest functions
    push: jest.fn(),
    replace: jest.fn()
  },

  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn()
  })
}));

// export the mocked instance above
module.exports = jest.requireMock('next/router');
