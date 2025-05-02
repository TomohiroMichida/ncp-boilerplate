import nextJest from 'next/jest';
import { common } from '../../jest.common';
import path from 'path';

const createJestConfig = nextJest({ dir: path.resolve(__dirname) });

const config = {
  displayName: 'frontend',
  testEnvironment: 'jsdom',
  ...common,
};

export default createJestConfig(config);
