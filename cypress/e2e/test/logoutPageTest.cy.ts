import { LogOutPage} from "../../pages/LogoutPage";
import userData from "../../fixtures/users.json";

describe('Logout Page Test',()=>{
    const logoutPage = new LogOutPage();
    const validUser=userData.validUser;

    beforeEach(()=>{
        cy.loginWithSession(validUser.username,validUser.password);
        cy.visit('/');
     
    });
   
    it('Test Case 1: User logout',{ tags: '@smoke @regression @critical' },()=>{
        cy.allure().feature('Logout');
        cy.allure().story('User Logout');
        cy.allure().startStep('Click on Logout');
        logoutPage.clickOnLogout();
        cy.allure().endStep();
    });

});

