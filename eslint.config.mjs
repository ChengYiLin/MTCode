import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import storybook from "eslint-plugin-storybook";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  // Build artifacts and generated files — keep out of linting.
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "storybook-static/**",
      "coverage/**",
      "next-env.d.ts",
    ],
  },

  // Next.js (App Router) + React + TypeScript + Core Web Vitals rules.
  ...nextCoreWebVitals,

  // Storybook story files (`designSystem/components/**/*.stories.tsx`).
  ...storybook.configs["flat/recommended"],

  // Must stay LAST: turns off ESLint rules that conflict with Prettier so
  // formatting stays owned by Prettier (`pnpm format`) and never fights ESLint.
  eslintConfigPrettier,
];

export default config;
