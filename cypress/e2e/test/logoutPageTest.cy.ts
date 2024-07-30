import { LogOutPage} from "../../pages/LogoutPage";
import userData from "../../fixtures/users.json";

describe('Logout Page Test',()=>{
    const logoutPage = new LogOutPage();
    const validUser=userData.validUser;

    beforeEach(()=>{
        cy.loginWithSession(validUser.username,validUser.password);
        cy.visit('/');
     
    });
   
    it('Test Case 1: User logout',()=>{
       logoutPage.clickOnLogout();
    });

});

