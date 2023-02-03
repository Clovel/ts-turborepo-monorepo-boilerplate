module.exports = {
  extends: [
    './eslintrc.react.js',
    // 'plugin:meteor/recommended',
  ],
  plugins: [
    'meteor',
  ],
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
    meteor: true,
  },
  settings: {
    'import/resolver': {
      meteor: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.es6',
          '.coffee',
        ],
        moduleDirectory: [
          'node_modules',
          'client',
          'imports',
          'server',
          'tests',
        ],
      },
    },
  },
  rules: {
    'meteor/audit-argument-checks': [
      'warn',
    ],
  },
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
      ],
      extends: [
        './eslintrc.react-ts.js',
        // 'plugin:meteor/recommended',
      ],
      plugins: [
        'meteor',
      ],
      env: {
        browser: true,
        node: true,
        es2020: true,
        jest: true,
        meteor: true,
      },
      settings: {
        'import/resolver': {
          meteor: {
            extensions: [
              '.js',
              '.jsx',
              '.ts',
              '.tsx',
              '.es6',
              '.coffee',
            ],
            moduleDirectory: [
              'node_modules',
              'client',
              'imports',
              'server',
              'tests',
            ],
          },
        },
      },
      rules: {
        'meteor/audit-argument-checks': [
          'warn',
        ],
      },
    },
  ],
};
