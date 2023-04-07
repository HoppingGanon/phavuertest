https://ralacode.com/blog/post/vscode-prettier/

```.prettierrc
{
  "editor.formatOnSave": true,
  "eslint.options": {
    "extensions": [".js", ".vue"]
  },
  "editor.defaultFormatter": null,
  "eslint.codeActionsOnSave.rules": null,
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[vue]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

```.eslintrc.js
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'never',
      },
    ],
    'semi-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
  },
```
