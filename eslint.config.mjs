export default [
  {
    ignores: ["dist/**", "node_modules/**", ".next/**"],
  },
  {
    files: ["src/**/*.{js,jsx}", "vite.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        document: "readonly",
        IntersectionObserver: "readonly",
        window: "readonly",
      },
    },
    rules: {
      "no-undef": "error",
    },
  },
];
