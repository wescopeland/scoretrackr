/* eslint-disable */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },

  testMatch: ["**/*.(spec|test).(ts|tsx)"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],

  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/pages/**/*",
    "!src/pages_/_app.tsx",
    "!src/pages_/_document.tsx",
    "!src/i18n.ts",
    "!**/__mocks__/*.{js,jsx,ts,tsx}",
    "!**/index.{js,jsx,ts}",
    "!**/*models*.{ts,tsx}",
    "!**/*.model.{ts}",
    "!**/*.d.ts"
  ],
  coverageThreshold: {
    global: 100
  },

  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json"
    }
  }
};
