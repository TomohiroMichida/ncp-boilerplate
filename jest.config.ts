import type { Config } from 'jest';

const config: Config = {
  projects: [
    '<rootDir>/src/frontend',
    '<rootDir>/src/backend',
    '<rootDir>/src/service',
  ],
};

export default config;
