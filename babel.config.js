module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // Always keep this as the last plugin
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
  ],
};
