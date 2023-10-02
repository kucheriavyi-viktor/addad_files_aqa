const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  experimentalStudios: true,
    viewportHeight: 900,
    viewportWidth: 1440,
    baseUrl: 'http://www.cypress.io',
  setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
