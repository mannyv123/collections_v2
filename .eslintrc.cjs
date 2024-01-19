module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended-type-checked",
      "plugin:react-hooks/recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "prettier",
      "plugin:prettier/recommended",
   ],
   ignorePatterns: ["dist", ".eslintrc.cjs"],
   parser: "@typescript-eslint/parser",
   plugins: ["react-refresh", "@typescript-eslint"],
   rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
   },
   parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: ["./tsconfig.json", "./tsconfig.node.json"],
      extraFileExtensions: [".json"],
      tsconfigRootDir: __dirname,
   },
   settings: {
      react: {
         version: "detect",
      },
   },
};
