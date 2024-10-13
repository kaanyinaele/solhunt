import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
    {
        ignores: ['dist'],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: globals.browser,
            parser: typescriptParser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@typescript-eslint': typescriptEslintPlugin,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            '@typescript-eslint/no-unused-vars': 'error',
        },
    },
];