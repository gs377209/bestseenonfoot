import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  staticDirs: ["../../public"],

  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
