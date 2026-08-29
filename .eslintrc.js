module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier, "@typescript-eslint"'],
  rules: {
    'max-lines': [
      'off',
      {
        max: 300,
      },
    ],
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',

    // usefull
    'prefer-const': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'warn',
  },
};
