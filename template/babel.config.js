module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      { useTransformReactJSXExperimental: true },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'babel-plugin-root-import',

      {
        paths: [
          {
            rootPathPrefix: '@src',
            rootPathSuffix: 'src',
          },
        ],
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'react-native-reanimated/plugin',
  ],
};
