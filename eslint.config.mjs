import { fixupPluginRules } from '@eslint/compat'
import eslint from '@eslint/js'
import eslintPrettier from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react/configs/recommended.js'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['dist/*', '.idea/*', '.vscode/*', '.storybook/main.js']
  },
  {
    ...eslint.configs.recommended,
    rules: {
      ...eslint.configs.recommended.rules,
      'no-prototype-builtins': 'off'
    }
  },
  ...tseslint.configs.recommended,
  {
    ...react,
    rules: {
      ...react.rules,
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/jsx-curly-brace-presence': 'warn'
    },
    settings: {
      react: { version: 'detect' }
    }
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  },
  {
    plugins: {
      'unused-imports': unusedImports
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'all',
          argsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    plugins: {
      'react-hooks': fixupPluginRules(eslintPluginReactHooks)
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules
    }
  },
  {
    ...eslintPrettier,
    rules: {
      'prettier/prettier': 'error'
    }
  }
)
