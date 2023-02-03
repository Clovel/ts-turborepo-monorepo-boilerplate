module.exports = {
  root: true,
  extends: [
    '@/eslint-config/eslintrc.react-ts.js',
  ],
  parserOptions: {
    project: [
      'tsconfig.json',
      'tsconfig.eslint.json',
    ],
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          'src',
          'node_modules',
        ],
      },
    },
  },
};
