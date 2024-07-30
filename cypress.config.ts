import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';




export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
  },
    baseUrl: "http://localhost:3000",
   // specPattern: "cypress/e2e/**/*.cy.ts",
  //  supportFile: 'cypress/support/e2e.ts',
  //  reporter: 'cypress-mochawesome-reporter',
   // reporterOptions: {
    //   reportDir: 'cypress/reports',
    //   overwrite: false,
    //   html: false,
    //   json: true,
    // },
    // env: {
    //   allure: true,
    // },
  },
});
