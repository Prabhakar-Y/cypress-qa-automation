
import { LoginPage } from "../../pages/LoginPage";
import userData from "../../fixtures/users.json";


describe('Login Page Tests - Test Suite',() => {
    const loginPage = new LoginPage();
    const baseUrl = `${Cypress.config('baseUrl')}/signin`;
    const validUser=userData.validUser;

    beforeEach(()=>{
        cy.loginWithSession(validUser.username,validUser.password);
    });
    
    // it('Test Case 1: Should display all required login page elements',()=>{
    //    // cy.visit(baseUrl);
    //     loginPage.assertUserNameFieldVisible();
    //     loginPage.assertPasswordFieldVisible();
    //     loginPage.assertSubmitButtonVisible();
    // });


    it('Test Case 1: Should allow the user to login with valid credentials', ()=>{
         cy.visit('/');
        // const validUser=userData.validUser;
        // loginPage.enterUserName(validUser.username);
        // loginPage.enterPassword(validUser.password);
        // loginPage.submitLoginButton();
        loginPage.assertUserLoggedIn('Ted P');
    });

    // it('Test Case 3: Should display an error message for invalid login credentials',()=>{
    //     const invalidUser=userData.invalidUser;
    //     loginPage.enterUserName(invalidUser.username);
    //     loginPage.enterPassword(invalidUser.password);
    //     loginPage.submitLoginButton();
    //     loginPage.assertErrorMessage('Username or password is invalid');
    // });  

    it('Test Case 2: Check login session',()=>{
        console.log("Testing");
    })
});

