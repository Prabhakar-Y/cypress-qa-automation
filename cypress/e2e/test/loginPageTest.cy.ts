
import { LoginPage } from "../../pages/LoginPage";
import userData from "../../fixtures/users.json";



describe('Login Page Tests - Test Suite',() => {
    const loginPage = new LoginPage();
    const baseUrl = `${Cypress.config('baseUrl')}/signin`;
    const validUser=userData.validUser;

    before(() => {
        cy.setEnvironmentDetails({
          'Base URL': Cypress.config('baseUrl') || 'default_base_url',
          'Browser': Cypress.browser.name || 'default',
          'Browser Version': Cypress.browser.version || 'unknown_version',
          'Platform': Cypress.platform || 'unknown_platform',
          'Cypress Version': Cypress.version || 'unknown_version',
          'Environment': 'QA'
        });
      });
      
    beforeEach(()=>{
            cy.loginWithSession(validUser.username,validUser.password);
           // cy.allure().addEnvironmentInfo({Browser : Cypress.config('baseUrl')});
            // cy.allure().addEnvironmentInfo('Base URL', Cypress.config('baseUrl'));
            // cy.allure().addEnvironmentInfo('Browser', Cypress.env('browser') || 'default');
            // cy.allure().addEnvironmentInfo('Platform', Cypress.env('platform') || 'macOS');
            // cy.allure().addEnvironmentInfo('Cypress Version', Cypress.version);

            // cy.allure().addEnvironmentInfo({
            //     'Base URL': Cypress.config('baseUrl') || 'default_base_url',
            //     'Browser': Cypress.env('browser') || 'default',
            //     'Platform': Cypress.env('platform') || 'macOS',
            //     'Cypress Version': Cypress.version || 'unknown_version',
            // });
            // cy.allure().addEnvironmentInfo({
            //     'Base URL': Cypress.config('baseUrl') || 'default_base_url',
            //     'Browser': Cypress.env('browser') || 'default',
            //     'Platform': Cypress.env('platform') || 'macOS',
            //     'Cypress Version': Cypress.version || 'unknown_version',
            // });
        });
    
    it('Test Case 1: Should display all required login page elements',()=>{
       // cy.visit(baseUrl);
        cy.allure().feature('Login');
        cy.allure().story('Login Page Elements');
        
        

        cy.allure().startStep('Assert username field is visible');
        loginPage.assertUserNameFieldVisible();
        cy.allure().endStep();

        cy.allure().startStep('Assert password field is visible');
        loginPage.assertPasswordFieldVisible();
        cy.allure().endStep();

        cy.allure().startStep('Assert submit button is visible');
        loginPage.assertSubmitButtonVisible();

        cy.compareSnapshot('login-page');

        cy.allure().endStep();

    });


    it('Test Case 2: Should allow the user to login with valid credentials', ()=>{
        cy.allure().startStep("Visiting the HomePage ")
        cy.visit('/');
        cy.allure().endStep();
       
        cy.allure().startStep("Assert the user is loggged in")
        loginPage.assertUserLoggedIn('Ted P');
       
        cy.compareSnapshot('homepage-after-login');

        cy.allure().endStep();
    });

    // it('Test Case 3: Should display an error message for invalid login credentials',()=>{
    //     const invalidUser=userData.invalidUser;
    //     loginPage.enterUserName(invalidUser.username);
    //     loginPage.enterPassword(invalidUser.password);
    //     loginPage.submitLoginButton();
    //     loginPage.assertErrorMessage('Username or password is invalid');
    // });  

    // it('Test Case 2: Check login session',()=>{
    //     console.log("Testing");
    // })
});

