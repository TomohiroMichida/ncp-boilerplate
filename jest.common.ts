import type { Config } from 'jest';

export const common: Pick<Config, keyof Config> = {
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  clearMocks: true,
};
