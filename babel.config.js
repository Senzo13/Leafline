module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@navigations': './src/navigations',
            '@resources': './src/resources',
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@services': './src/services',
            '@constants': './src/constants',
            '@types': './src/types',
            '@context': './src/context',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
