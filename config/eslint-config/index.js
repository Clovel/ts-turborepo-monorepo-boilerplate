module.exports = {
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'turbo',
  ],
  plugins: [
    'import',
    '@spence1115/modules-newlines',
    'promise',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/external-module-folders': [
      'node_modules',
    ],
  },
  rules: {
    eqeqeq: 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
      },
    ],
    'multiline-ternary': [
      'warn',
      'always-multiline',
    ],
    semi: [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'object-curly-spacing': [
      'warn',
      'always',
      {
        objectsInObjects: false,
        arraysInObjects: false,
      },
    ],
    'object-curly-newline': [
      'warn',
      {
        ObjectPattern: {
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
        },
      },
    ],
    'object-shorthand': 'off',
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'array-bracket-spacing': [
      'warn',
      'always',
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          if: {
            after: false,
          },
          switch: {
            after: false,
          },
          for: {
            after: false,
          },
          while: {
            after: false,
          },
          catch: {
            after: false,
          },
        },
      },
    ],
    'space-before-blocks': [
      'error',
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'init-declarations': [
      'error',
      'always',
    ],
    'prefer-template': [
      'error',
    ],
    'no-undef-init': [
      'off',
    ],
    camelcase: [
      'warn',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          VariableDeclarator: true,
          Property: true,
          ImportDeclaration: true,
        },
      },
    ],
    'operator-linebreak': [
      'warn',
      'after',
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'symbol-description': 'warn',
    '@spence1115/modules-newlines/import-declaration-newline': 'warn',
    '@spence1115/modules-newlines/export-declaration-newline': 'warn',
    'promise/always-return': [
      'error',
      {
        ignoreLastCallback: true,
      },
    ],
    'promise/catch-or-return': [
      'error',
      {
        allowFinally: true,
      },
    ],
    'turbo/no-undeclared-env-vars': 'off',
  },
};
