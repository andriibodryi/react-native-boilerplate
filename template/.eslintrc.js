module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: [
    'jest',
    'import',
    '@typescript-eslint',
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-tsdoc',
    'prettier',
  ],
  env: {
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: true,
      },
    ],
    'no-implicit-coercion': 'error',
    'react/jsx-key': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'internal',
          'builtin',
          ['sibling', 'parent'],
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'no-shadow': 'off',
    'max-lines': ['error', 200],
    'no-nested-ternary': 'error',
    'tsdoc/syntax': 'warn',
    '@typescript-eslint/no-shadow': ['error'],
    'react/react-in-jsx-scope': 'off',
    'import/newline-after-import': 1,
  },

  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
