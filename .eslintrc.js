module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'prettier'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    exclude: ['**/*.eslintrc.js']
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@ui', './src/components/ui'],
          ['@components', './src/components'],
          ['@lib', './src/lib']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    },
    react: {
      version: 'detect'
    }
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-newline': 0,
    'react/jsx-pascal-case': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/space-before-function-paren': 0
  }
}
