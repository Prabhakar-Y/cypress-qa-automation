import { BankAccountPage } from "../../pages/BankAccountPage"; 
import userData from "../../fixtures/users.json";


describe('Bank Account Page Tests' ,() =>{
    const bankAccountPage=new BankAccountPage();
    const validUser=userData.validUser;

    beforeEach(()=>{
        cy.loginWithSession(validUser.username,validUser.password);
    });


    it('Test Case 1: Should display the bank account page title',()=>{
        cy.visit('/bankaccounts');
        bankAccountPage.clickOnBankAccountMenu();
        bankAccountPage.assertBankAccountPageTitle('Bank Accounts');
    });

    it('Test Case 2: Should navigate to create bank account page', () => {
        cy.visit('/bankaccounts');
        bankAccountPage.clickOnCreateButton();
        bankAccountPage.assertCreateBankAccountPageTitle('Create Bank Account'); 
    });


    it('Test Case 3: Should allow user to enter bank details and save', () => {
        cy.visit('/bankaccounts/new');
        bankAccountPage.enterBankNameTextField('CypressBankingSolution');
        bankAccountPage.enterRoutingNumberTextField('123456789');
        bankAccountPage.enterAccountNumberTextField('987654321');
        bankAccountPage.clickSaveButton();
    });

    it('Test Case 4: Should display the created bank account in the list', () => {
        cy.visit('/bankaccounts');
        cy.get('ul[data-test="bankaccount-list"] li')
        .contains('CypressBankingSolution')
        .should('be.visible');
      });
})


   