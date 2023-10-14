module.exports = {
  root: true,
  ignorePatterns: ['dist/*', 'coverage/*'],
  plugins: ['@typescript-eslint', 'prettier', 'import', 'regexp', 'vitest'],
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  env: { browser: true, es6: true },
  rules: {
    /* Common Rules */
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      /* TypeScript/JavaScript rules */
      files: ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:regexp/recommended'],
      rules: {
        'array-callback-return': 'warn',
        'no-cond-assign': ['warn', 'except-parens'],
        'no-control-regex': 'warn',
        'no-empty-character-class': 'warn',
        'no-ex-assign': 'warn',
        'no-fallthrough': 'warn',
        'no-invalid-regexp': 'off', // Off for RegExp
        'no-self-assign': 'warn',
        'no-self-compare': 'warn',
        'no-sparse-arrays': 'warn',
        'no-unreachable': 'warn',
        'no-unreachable-loop': 'warn',
        'consistent-return': 'error',
        eqeqeq: ['warn', 'smart'],
        'logical-assignment-operators': ['warn', 'always', { enforceForIfStatements: true }],
        'no-caller': 'warn',
        'no-else-return': ['warn', { allowElseIf: false }],
        'no-empty-static-block': 'warn',
        'no-eval': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: true }],
        'no-extra-label': 'warn',
        'no-global-assign': 'warn',
        'no-iterator': 'warn',
        'no-label-var': 'warn',
        'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
        'no-lone-blocks': 'warn',
        'no-lonely-if': 'warn',
        'no-loop-func': 'warn',
        'no-mixed-operators': [
          'warn',
          {
            groups: [
              ['&', '|', '^', '~', '<<', '>>', '>>>'],
              ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
              ['&&', '||'],
              ['in', 'instanceof'],
            ],
            allowSamePrecedence: false,
          },
        ],
        'no-new-func': 'warn',
        'no-new-object': 'warn',
        'no-new-wrappers': 'warn',
        'no-octal-escape': 'warn',
        'no-regex-spaces': 'warn',
        'no-restricted-globals': ['error', 'event'],
        'no-restricted-properties': [
          'error',
          { object: 'require', property: 'ensure', message: 'Use import() instead' },
          { object: 'System', property: 'import', message: 'Use import() instead' },
        ],
        'no-restricted-syntax': ['warn', 'WithStatement'],
        'no-script-url': 'warn',
        'no-sequences': 'warn',
        'no-shadow-restricted-names': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unused-labels': 'warn',
        'no-useless-call': 'warn',
        'no-useless-catch': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-rename': ['warn', { ignoreDestructuring: false, ignoreExport: false }],
        'no-useless-return': 'warn',
        'no-with': 'warn',
        'object-shorthand': 'warn',
        'operator-assignment': 'warn',
        'prefer-exponentiation-operator': 'warn',
        'prefer-numeric-literals': 'warn',
        'prefer-object-spread': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'require-yield': 'warn',
        'spaced-comment': ['warn', 'always', { markers: ['/', 'TODO:', 'NOTE:', 'FIXME:'], exceptions: ['prettier-ignore'] }], //prettier-ignore
        strict: ['warn', 'never'],
        'dot-location': ['warn', 'property'],
        'new-parens': 'warn',
        'no-whitespace-before-property': 'warn',
        'rest-spread-spacing': ['warn', 'never'],
        'unicode-bom': ['warn', 'never'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/adjacent-overload-signatures': 'warn',
        '@typescript-eslint/consistent-generic-constructors': 'warn',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        '@typescript-eslint/consistent-type-imports': ['warn', { fixStyle: 'inline-type-imports' }],
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
        '@typescript-eslint/prefer-as-const': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        'import/no-empty-named-blocks': 'warn',
        'import/no-useless-path-segments': 'warn',
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
        'import/order': ['warn', { alphabetize: { order: 'asc' } }],
        'regexp/no-missing-g-flag': 'warn',
        'regexp/no-useless-assertions': 'warn',
        'regexp/no-extra-lookaround-assertions': 'warn',
        'regexp/prefer-quantifier': 'warn',
        'regexp/prefer-regexp-test': 'warn',
        'regexp/use-ignore-case': 'warn',

        /* Exceptions to make TypeScript less strict */
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      /* TypeScript/JavaScript in src/ rules */
      files: ['src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/consistent-type-exports': ['warn', { fixMixedExportsWithInlineTypeSpecifier: true }],
        '@typescript-eslint/no-duplicate-type-constituents': 'warn',
        '@typescript-eslint/no-import-type-side-effects': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-this-alias': ['warn', { allowedNames: ['self'] }],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/strict-boolean-expressions': ['warn', { allowNullableBoolean: true, allowNullableString: true, allowNullableNumber: true }], //prettier-ignore
        '@typescript-eslint/dot-notation': 'warn',
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-redeclare': 'warn',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }], //prettier-ignore
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true }], //prettier-ignore
        '@typescript-eslint/no-use-before-define': ['warn', { functions: false, classes: false, variables: false, typedefs: false }], //prettier-ignore
        '@typescript-eslint/no-useless-constructor': 'warn',

        /* Exceptions to make TypeScript in src/ less strict */
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/require-await': 'off',
      },
    },
    {
      /* Declaration & Config Rules */
      files: ['**/*.d.ts', '**/*.config.*', '*rc.cjs'],
      env: { browser: true, commonjs: true, es6: true, node: true },
      rules: { '@typescript-eslint/no-unused-vars': 'off' },
    },
    {
      /* Test Rules */
      files: ['**/*.{test,spec}.*'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        'vitest/consistent-test-filename': ['warn', { pattern: '\\.test\\.tsx?$' }],
        'vitest/consistent-test-it': ['warn', { fn: 'it' }],
        'vitest/expect-expect': 'error',
        'vitest/max-nested-describe': ['error', { max: 3 }],
        'vitest/no-alias-methods': 'warn',
        'vitest/no-conditional-expect': 'warn',
        // 'vitest/no-conditional-tests': 'error', // broken
        'vitest/no-disabled-tests': 'warn',
        'vitest/no-duplicate-hooks': 'error',
        'vitest/no-focused-tests': 'warn',
        'vitest/no-identical-title': 'error',
        'vitest/prefer-comparison-matcher': 'warn',
        'vitest/prefer-equality-matcher': 'warn',
        'vitest/prefer-lowercase-title': 'warn',
        'vitest/prefer-hooks-in-order': 'warn',
        'vitest/prefer-hooks-on-top': 'warn',
        'vitest/prefer-mock-promise-shorthand': 'warn',
        'vitest/no-standalone-expect': 'warn',
        'vitest/no-test-return-statement': 'warn',
        'vitest/prefer-to-be': 'warn',
        'vitest/prefer-to-contain': 'warn',
        'vitest/prefer-to-have-length': 'warn',
        'vitest/valid-describe-callback': 'error',
        'vitest/valid-title': 'warn',
      },
    },
  ],
};
