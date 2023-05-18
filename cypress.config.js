const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        responseTimeout: 60000,
        viewportHeight: 1080,
        viewportWidth: 1920,
        video: false,
        baseUrl: 'https://demo.automationtesting.in/Register.html',

        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    },
});