module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    // "airbnb/base",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],

    quotes: [2, "double", { allowTemplateLiterals: true }],
    curly: 2,
    "no-tabs": "error",
    "no-console": 0,
    "no-debugger": "off",
    "no-alert": "off",
    "no-unused-vars": "off",
  },
};
