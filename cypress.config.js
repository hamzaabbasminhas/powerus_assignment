const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    specPattern: 'cypress/integration/src/specs/*.ts',
    baseUrl: 'https://staging.powerus.de/'
  },
});
