module.exports = {
  extends: [
    './eslintrc.javascript.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-unescaped-entities': [
      'off',
    ],
    'react/display-name': [
      'off',
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'react/jsx-no-useless-fragment': [
      'error',
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'ignore',
      },
    ],
    'react/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'none',
      },
    ],
    'react/jsx-indent': [
      'error',
      2,
      {
        checkAttributes: false,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/jsx-props-no-multi-spaces': [
      'error',
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'always',
      },
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop',
    ],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: false,
        logical: false,
        prop: false,
      },
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        attributes: {
          allowMultiline: true,
          children: false,
        },
        spacing: {
          objectLiterals: 'never',
        },
      },
    ],
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'require',
        singleline: 'forbid',
      },
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-closing-tag-location': [
      'error',
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-closing-bracket-location': [
      'error',
      'line-aligned',
    ],
    'react/jsx-key': [
      'warn',
      {
        checkKeyMustBeforeSpread: true,
      },
    ],
    'react/prop-types': [
      'off',
    ],
    'react-hooks/rules-of-hooks': [
      'error',
    ],
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useTracker)',
      },
    ],
  },
};
