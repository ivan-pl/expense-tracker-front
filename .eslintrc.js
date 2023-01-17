module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:css-modules/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "css-modules", "import"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off", // https://github.com/typescript-eslint/typescript-eslint/issues/1624
    "import/extensions": "off",
  },
  overrides: [
    {
      files: ["webpack.*.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: [
        "webpack.*.js",
        "babel.config.js",
        ".eslintrc.js",
        "fileMock.js",
        "styleMock.js",
      ],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
