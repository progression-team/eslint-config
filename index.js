module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:promise/recommended"
  ],
  plugins: [
    "import",
    "promise"
  ],
  rules: {
    'import/extensions': ['error', {
      'js': 'never',
      'jsx': 'never',
      'ts': 'never',
      'tsx': 'never',
      'json': 'always',
      'css': 'always',
      'scss': 'always',
      'svg': 'always',
      'png': 'always',
      'jpg': 'always',
      'jpeg': 'always'
    }],
    'import/no-unresolved': 0,
    'semi': ['error', 'never'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
    'arrow-parens': ['error', 'always'],
    'no-underscore-dangle': 'off',
    'no-return-assign': 'off',
    'no-console': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'global-require': 'off',
    'object-curly-spacing': ['error', 'always'],
    'promise/avoid-new': 'off',
    'promise/prefer-await-to-then': 1,
    'promise/prefer-await-to-callbacks': 1,
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
        'test/**/*',
        'config/**/*',
        '**/__mocks__/**/*',
        'build/**/*',
        '**/*.spec.*',
        '**/*.test.*'
      ]
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts', '.tsx']
      }
    },
  },
  globals: {}
}
