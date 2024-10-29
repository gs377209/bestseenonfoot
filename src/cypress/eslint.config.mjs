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
  ...compat.extends("../.eslintrc.json", "plugin:cypress/recommended"),
];

export default config;

// old config:
// {
//   "extends": ["../.eslintrc.json", "plugin:cypress/recommended"]
// }
