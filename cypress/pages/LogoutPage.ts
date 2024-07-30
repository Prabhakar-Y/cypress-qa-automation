import { logoutPageLocators } from "./locators/logoutPageLocators";

export class LogOutPage{

    clickOnLogout(){
        cy.get(logoutPageLocators.logoutButton).click();
    }
}
