module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/', '<rootDir>/dist/', '<rootDir>/coverage/'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/', '<rootDir>/dist/', '<rootDir>/coverage/'],
  setupFiles: ['<rootDir>/setupTests.js'],
  moduleFileExtensions: ['ts', 'js'],
  modulePaths: ['<rootDir>/src', '<rootDir>/src/database'],
  coverageThreshold: {
    global: {
      branches: 22,
      functions: 30,
      lines: 77,
      statements: -137,
    },
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
};
