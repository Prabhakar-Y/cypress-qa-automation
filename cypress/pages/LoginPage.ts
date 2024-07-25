import { LoginPageLocators } from "./locators/loginPageLocators";

export class LoginPage{

    enterUserName(userName:string){
        cy.get(LoginPageLocators.userNameInputField).type(userName);
    }

    enterPassword(password:string){
        cy.get(LoginPageLocators.passwordInputField).type(password);
    }

    submitLoginButton(){
        cy.get(LoginPageLocators.submitButton).click();   
    }

    //Custom Assertion for login page elements 
    assertUserNameFieldVisible(){
        cy.get(LoginPageLocators.userNameInputField).should('be.visible');
    }

    assertPasswordFieldVisible(){
        cy.get(LoginPageLocators.passwordInputField).should('be.visible');
    }

    assertSubmitButtonVisible(){
        cy.get(LoginPageLocators.submitButton).should('be.visible');
    }

   
    assertErrorMessage(message:string){
        cy.get(LoginPageLocators.loginErrorMessage).should('contain',message);
    }

    assertUserLoggedIn(expectedText:string){
        cy.get(LoginPageLocators.userLoggedInName)
        .should('be.visible')
        .and('contain.text',expectedText);
    }



}