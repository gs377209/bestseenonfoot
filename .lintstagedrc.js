module.exports = {
  "!(*.md|*.css|*.scss|*.js|*.jsx|*.ts|*.tsx)": [
    "prettier --cache --write --ignore-unknown",
  ],
  "*.md": [
    "markdownlint-cli2 --cache --fix",
    "prettier --cache --write --ignore-unknown",
  ],
  "*.{css,scss}": ["prettier --cache --write --ignore-unknown"],
  "*.{js,jsx,ts,tsx}": [
    "eslint --cache --fix",
    "prettier --cache --write --ignore-unknown",
  ],
};
