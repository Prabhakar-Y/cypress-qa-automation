import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      require('@cypress/grep/src/plugin')(on, config);
  
      return config;
  },
    baseUrl: "http://localhost:3000",
    env: {
      allure: true,
      grepTags: '@critical',
      // browser: process.env.BROWSER || 'default',
      // platform: process.env.PLATFORM || 'macOS'

    },
  },
});
