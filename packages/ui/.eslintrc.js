/* This ESLint config is used in the @vistaswarm/eslint-config package */
module.exports = {
  root: true,
  extends: [
    '@/eslint-config/eslintrc.react-ts.js',
  ],
  parserOptions: {
    project: [
      'tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
  },
};
