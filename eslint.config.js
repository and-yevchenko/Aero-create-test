import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginJest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config[]} **/
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
      parserOptions: eslintReact.configs.recommended.parserOptions,
    },
  },
  pluginJs.configs.recommended,
  eslintReact.configs.flat.recommended,
  eslintPluginJest.configs.recommended,
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh,
      prettier: eslintPluginPrettier,
      'jest': eslintPluginJest,
    },
  },
  {
    ignores: ['node_modules', 'dist', '.vscode', 'coverage', 'babel.config.js'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'jest/no-focused-tests': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    "env": {
      "jest/globals": true
    },
  }
];
