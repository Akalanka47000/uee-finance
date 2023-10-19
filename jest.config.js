module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  modulePathIgnorePatterns: ['__mocks__', '__setup__'],
  setupFiles: ['./__tests__/__setup__/storage.js']
};
