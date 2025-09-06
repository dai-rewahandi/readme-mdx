import type { Config } from 'prettier';

const config: Config = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'preserve',
  endOfLine: 'lf',
  quoteProps: 'as-needed',
  plugins: ['prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['*.tsx', '*.ts', '*.mdx'],
    },
  ],
};

export default config;
