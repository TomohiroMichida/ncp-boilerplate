import path from 'path';
import { common } from '../../jest.common';
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'backend',
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: path.resolve(__dirname),
  roots: ['<rootDir>/src/usecase'],
  ...common,
};

export default config;
