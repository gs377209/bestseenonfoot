import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      bundler: "webpack",
      framework: "next",
    },
    specPattern: "src/cypress/component/**/*.cy.{js,jsx,ts,tsx}",
  },
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: "http://localhost:3000",
    // blockHosts: [
    //   "*google-analytics.com",
    //   "*googletagmanager.com",
    //   "*googleoptimize.com",
    //   "*googlesyndication.com",
    //   "*google.com",
    //   "*googleadservices.com",
    //   "*doubleclick.net",
    //   "*facebook.net",
    //   "*facebook.com",
    //   "*fbcdn.net",
    //   "*twitter.com",
    // ],
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
