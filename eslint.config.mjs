import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import parser from "eslint-plugin-markdownlint/parser.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const config = [
  ...compat.extends("eslint:recommended"),
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...compat.extends("plugin:cypress/recommended"),
  ...compat.extends("plugin:storybook/recommended"),
  ...compat.extends("prettier"),
  {
    rules: {
      "@next/next/no-before-interactive-script-outside-document": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],
      "no-duplicate-imports": "warn",
      "no-unused-expressions": "warn",
      "no-unused-private-class-members": "warn",
      "no-useless-rename": "warn",
      "sort-imports": [
        "warn",
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],
      "sort-keys": "warn",
      "sort-vars": "warn",
    },
  },
  ...compat.extends("plugin:markdownlint/recommended").map((config) => ({
    ...config,
    files: ["**/*.md"],
    languageOptions: {
      parser: parser,
    },
    rules: {
      "markdownlint/md013": "off",
    },
  })),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "public/scripts/pixel.js",
    ],
  },
];

// old json config: {
//   "extends": [
//     "eslint:recommended",
//     "plugin:cypress/recommended",
//     "next/core-web-vitals",
//     "prettier",
//     "plugin:storybook/recommended"
//   ],
//   "rules": {
//     "@next/next/no-before-interactive-script-outside-document": "off",
//     "no-duplicate-imports": "warn",
//     "no-useless-rename": "warn",
//     "sort-imports": [
//       "warn",
//       {
//         "ignoreCase": false,
//         "ignoreDeclarationSort": true,
//         "ignoreMemberSort": false,
//         "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
//         "allowSeparatedGroups": false
//       }
//     ],
//     "sort-keys": "warn",
//     "sort-vars": "warn",
//     "no-unused-private-class-members": "warn",
//     "no-unused-expressions": "warn"
//   },
//   "overrides": [
//     {
//       "files": ["*.md"],
//       "parser": "eslint-plugin-markdownlint/parser",
//       "extends": ["plugin:markdownlint/recommended"]
//     }
//   ]
// }

export default config;
