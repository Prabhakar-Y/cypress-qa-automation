/// <reference types="cypress" />
//require('@shelex/cypress-allure-plugin');
import {LoginPageLocators} from "../pages/locators/loginPageLocators";
import userData from "../fixtures/users.json";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 //  Cypress.Commands.add('login', (email,password) => { ... });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>;
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


Cypress.Commands.add('login',(username:string,password:string)=>{
    const validUser=userData.validUser;
    const baseUrl = `${Cypress.config('baseUrl')}/signin`;
    cy.visit("http://localhost:3000/signin"); 
    cy.url().should('include', baseUrl); 
    cy.get(LoginPageLocators.userNameInputField).type(validUser.username);
    cy.get(LoginPageLocators.passwordInputField).type(validUser.password);
    cy.get(LoginPageLocators.submitButton).click();

})

Cypress.Commands.add('loginWithSession',(username:string,password:string) =>{
    const validUser=userData.validUser;
    const baseUrl = `${Cypress.config('baseUrl')}/signin`;
   // const baseUrl = `${Cypress.config('baseUrl')}`;
    cy.session([username,password],()=>{
        cy.visit(baseUrl); 
        cy.url().should('include', baseUrl); 
        cy.get(LoginPageLocators.userNameInputField,{timeout:10000}).should('be.visible').type(validUser.username);
        cy.get(LoginPageLocators.passwordInputField,{timeout:10000}).should('be.visible').type(validUser.password);
        cy.get(LoginPageLocators.submitButton,{timeout:10000}).should('be.visible').click();
        cy.location('pathname').should('eq', '/'); 
        
    })
})

Cypress.Commands.add('setEnvironmentDetails', (details: Record<string, string>) => {
    const allure = (Cypress as any).allure;
    if (allure) {
      Object.entries(details).forEach(([key, value]) => {
        allure.addEnvironment(key, value);
      });
    }
  });
  

