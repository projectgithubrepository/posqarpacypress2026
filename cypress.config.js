const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {  
    // baseUrl: 'https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/',
    setupNodeEvents(on, config) {
      const version = config.env.version || 'qa'
      config.env = require(`./cypress/config/${version}.json`);
      config.baseUrl = config.env.baseUrl;
      return config;

      // implement node event listeners here
    },
  },
});
