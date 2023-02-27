import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      bundler: "webpack",
      framework: "next",
    },
  },
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
