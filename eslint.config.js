import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} **/
export default [
  { languageOptions: 
    { 
      globals: {
      ...globals.browser,
      ...globals.es2024 
      },
      parserOptions: eslintReact.configs.recommended.parserOptions
    }, 
  },
  pluginJs.configs.recommended,
  eslintReact.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh,
      prettier: eslintPluginPrettier,
    },
  },
  {
    ignores: ['node_modules', 'dist', '.vscode'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
