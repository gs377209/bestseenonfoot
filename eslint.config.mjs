import parser from "eslint-plugin-markdownlint/parser.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "next/core-web-vitals",
    "next/typescript",
    "plugin:cypress/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ),
  {
    rules: {
      "@next/next/no-before-interactive-script-outside-document": "off",
      "no-duplicate-imports": "warn",
      "no-useless-rename": "warn",

      "sort-imports": [
        "warn",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: false,
        },
      ],

      "sort-keys": "warn",
      "sort-vars": "warn",
      "no-unused-private-class-members": "warn",
      "no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  ...compat.extends("plugin:markdownlint/recommended").map((config) => ({
    ...config,
    files: ["**/*.md"],
    rules: {
      "markdownlint/md013": "off",
    },
    languageOptions: {
      parser: parser,
    },
  })),
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
