import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^pg$': '<rootDir>/__mocks__/pg.ts',
  },
};

export default config;
