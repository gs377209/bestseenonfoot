import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      bundler: "webpack",
      framework: "next",
    },
    specPattern: "src/cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "src/cypress/support/component.ts",
    indexHtmlFile: "src/cypress/support/component-index.html",
  },
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents() {
      // implement node event listeners here
    },
    specPattern: "src/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "src/cypress/support/component.ts",
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
    // ],
  },
});
