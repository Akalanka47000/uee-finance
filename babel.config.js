module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': ['./src']
        }
      }
    ],
    'react-native-reanimated/plugin'
  ],
  env: {
    production: {
      plugins: ['transform-remove-console']
    }
  }
};
