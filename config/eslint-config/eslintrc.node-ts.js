module.exports = {
  extends: [
    './eslintrc.typescript.js',
    'plugin:n/recommended',
  ],
  rules: {
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
    'n/no-unsupported-features/es-syntax': 'off',
    'n/no-missing-import': 'off', /* False negatives in ES syntax */
    'n/no-process-exit': 'off',
    'n/no-unsupported-features/node-builtins': [
      'error',
      {
        version: '>=14.19.3',
        ignores: [],
      },
    ],
    'n/no-unpublished-require': 'off',
    'n/no-unpublished-import': 'off',
  },
};
