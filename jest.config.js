module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
    '!src/__mocks__'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  }
};
