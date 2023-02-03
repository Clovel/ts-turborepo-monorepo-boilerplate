module.exports = {
  extends: [
    './index.js',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es2020: true,
  },
};
