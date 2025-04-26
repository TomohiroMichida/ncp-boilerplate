// eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginImport from 'eslint-plugin-import';
import parserTypeScript from '@typescript-eslint/parser';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.next/**'],
  },
  {
    languageOptions: {
      parser: parserTypeScript,
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
      import: eslintPluginImport,
      '@typescript-eslint': pluginTypeScript,
    },
    rules: {},
  },
];
