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
