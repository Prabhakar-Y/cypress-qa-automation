import { BankAccountPageLocators } from "./locators/BankAccountPageLocators";

export class BankAccountPage{

    clickOnBankAccountMenu(){
        cy.get(BankAccountPageLocators.bankAccountMenu).click();
    }

    assertBankAccountPageTitle(expectedText:string){
        cy.get(BankAccountPageLocators.bankAccountPageTitle)
        .should('be.visible')
        .and('contain.text',expectedText);
    }

    clickOnCreateButton(){
        cy.get(BankAccountPageLocators.createButton).click();
    }

    assertCreateBankAccountPageTitle(expectedText:string){
        cy.get(BankAccountPageLocators.createBankAccountPageTitle)
        .should('be.visible')
        .and('contain.text',expectedText);
    }

    enterBankNameTextField(bankName: string){
        cy.get(BankAccountPageLocators.bankNameTextField).type(bankName);
    }

    enterRoutingNumberTextField(routingNumber:string){
        cy.get(BankAccountPageLocators.routingNumberTextField).type(routingNumber);
    }

    enterAccountNumberTextField(accountNumber:string){
        cy.get(BankAccountPageLocators.accountNumberTextField).type(accountNumber);
    }

    clickSaveButton(){
        cy.get(BankAccountPageLocators.saveButton).click();
    }

    
}