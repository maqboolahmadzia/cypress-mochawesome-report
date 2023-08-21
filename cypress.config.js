const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		"specPattern": [
		"cypress/e2e/2-advanced-examples/actions.cy.js",
		"cypress/e2e/2-advanced-examples/aliasing.cy.js"
	],

		reporter: 'cypress-mochawesome-reporter',
		reporterOptions: {
			reportFilename: 'cypressMochawesomeReport',
			videoOnFailOnly:'true',
			overwrite: true,
		},
	
		screenshots: {
			enabled: true,
		},

		setupNodeEvents(on, config) {
			// implement node event listeners here
			require('cypress-mochawesome-reporter/plugin')(on);
		},
		
	},
});
