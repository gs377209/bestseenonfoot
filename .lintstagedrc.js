// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "!(*.md|*.css|*.scss|*.js|*.jsx|*.ts|*.tsx)": [
    "prettier --cache --write --ignore-unknown",
  ],
  "*.md": [
    "markdownlint-cli2 --cache --fix",
    "prettier --cache --write --ignore-unknown",
  ],
  "*.{css,scss}": [
    "stylelint --cache --fix",
    "prettier --cache --write --ignore-unknown",
  ],
  "*.{js,jsx,ts,tsx}": [
    buildEslintCommand,
    "prettier --cache --write --ignore-unknown",
  ],
};
