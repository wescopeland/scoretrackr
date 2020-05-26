/* eslint-disable */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  testMatch: ["**/*.(spec|test).(ts|tsx)"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],

  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/pages/_app.tsx",
    "!src/pages/_document.tsx",
    "!**/__mocks__/*.{js,jsx,ts,tsx}",
    "!**/index.{js,jsx,ts}",
    "!**/*.model.ts",
    "!**/*.d.ts",
    "!src/utils/testing/**/*.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
    },
  },
};
