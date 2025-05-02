import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Mocked response' }),
  })
) as jest.Mock;
