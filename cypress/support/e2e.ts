// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '.'
import '@mmisty/cypress-allure-adapter/support'
import '@cypress/grep/src/support';




// @ts-ignore
import registerCypressGrep from '@cypress/grep/src/support';
registerCypressGrep();


// Adding Allure enviorment variables to the report 
// Cypress.on('test:before:run',() =>{
//         const allure=Cypress.Allure as any;
//         allure.addEnvironmentInfo('Base URL', Cypress.config('baseUrl'));
//         allure.addEnvironmentInfo('Browser', Cypress.browser.name);
//         allure.addEnvironmentInfo('Platform', Cypress.env('platform') || 'macOS');
//         allure.addEnvironmentInfo('Cypress Version', Cypress.version);
// });

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Exception handling globally for all test/spec files.
Cypress.on('fail',(error,runnable)=>{
        cy.log(error.message);
        return false;
});

