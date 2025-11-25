module.exports = [
  {
    // Use the flat config 'ignores' property instead of a separate .eslintignore
    ignores: ["node_modules/**", "dist/**"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      // If you need specific globals (from `env`), add them here as an object,
      // for example: globals: { window: 'readonly', process: 'readonly' }
    },
    // Keep recommended rules and project rules here
    rules: {
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-unused-vars": ["warn", { "args": "none", "ignoreRestSiblings": true }],
      "no-console": "off"
    }
  }
];
