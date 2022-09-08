module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    }
  },
  plugins: [
    'react',
  ],
  rules: {
    "indent": ["error", 2],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-param-reassign": 0,
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
      },
    ],
  },
};
