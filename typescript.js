module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'comma'
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-ignore': 0
  }
}
