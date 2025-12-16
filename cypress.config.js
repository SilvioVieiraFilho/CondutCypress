const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    username: 'fulano_123@gmail.com',
    password: '12345678'
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    baseUrl: 'https://conduit.bondaracademy.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  retries: 1,
  viewportWidth: 1200,
  viewportHeight: 720
});
