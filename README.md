# Generate consolidated test report in html format  using mochawesome 

# Prerequisites

The first thing we need to do is to setup our environment. So here are some things that you should have to start this project:

VSCode: https://code.visualstudio.com/download </br>
NPM: https://www.npmjs.com/get-npm </br>
NodeJS: https://nodejs.org/en/download

# Steps to generate mochawesome report:
  1. Install the required cypress-mochawesome-reporter packages as dev dependencies:

   - npm i --save-dev cypress-mochawesome-reporter 

 2. Run your Cypress tests with the Mochawesome reporter. Update your Cypress configuration in cypress.config.js as mentioned before:

     	module.exports = defineConfig({
     
	     e2e: {
   	 	setupNodeEvents(on, config) {
      		// implement node event listeners here
    	     },
    	reporter: 'cypress-mochawesome-reporter',
    	reporterOptions: {
			reportFilename: 'cypressMochawesomeReport',
			videoOnFailOnly:'true',
			overwrite: true,
		},
    	screenshots: {
		enabled: true,
    	},
  	},
	});

3. Run your Cypress tests using: npx cypress run

4. Generate and view the HTML report:

- Navigate to cypress\reports\html where you can find and open the cypressMochawesomeReport.html file in your web browser to view the test report containing results, screenshots and videos (for failed tests) from all the test runs.



## Use

1. Checkout the project from git - git clone https://github.com/alagamai/cypress-mochawesome-report
2. Navigate to the project root directory - cypress-mochawesome-report
3. Install dependencies with `npm install` 
4. execute 
   npm run cy:run - to run npm scripts in headless mode 
   
   npm run cy:merge-json - to merge all jsons into single consolidated json file
   
   npm run cy:group-html - to convert merged json into consolidated html report   
    

