import path from 'path';
import { common } from '../../jest.common';
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'service',
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: path.resolve(__dirname),
  roots: ['<rootDir>/src/repository'],
  ...common,
};

export default config;
