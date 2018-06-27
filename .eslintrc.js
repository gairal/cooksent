const path = require('path');

module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  env: {
    browser: true,
    'jest/globals': true,
  },
  globals: {
    LOG_LEVEL: true,
  },
  plugins: ['jest'],
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 1,
    curly: 2,
    indent: [2, 2, { 'SwitchCase': 1 }],
    eqeqeq: 2,
    'new-cap': 2,
    camelcase: 2,
    quotes: [2, 'single'],
    'no-trailing-spaces': 2,
    'no-console': 0,
    'no-prototype-builtins': 0,
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@', path.resolve(__dirname, 'src/app')],
        ['Mocks', path.resolve(__dirname, 'test/mocks')],
      ],
    },
  },
};
