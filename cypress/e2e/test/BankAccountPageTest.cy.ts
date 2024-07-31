import { BankAccountPage } from "../../pages/BankAccountPage"; 
import userData from "../../fixtures/users.json";



describe('Bank Account Page Tests' ,() =>{
    const bankAccountPage=new BankAccountPage();
    const validUser=userData.validUser;


    beforeEach(()=>{
        cy.loginWithSession(validUser.username,validUser.password);
        cy.visit('/bankaccounts');
    });


    it('Test Case 1: Should display the bank account page title',()=>{
        cy.allure().feature('Bank Accounts');
        cy.allure().story('Display Bank Account Page Title');
        bankAccountPage.clickOnBankAccountMenu();

        cy.allure().startStep('Assert Bank Account Page Title');
        bankAccountPage.assertBankAccountPageTitle('Bank Accounts');
        cy.allure().endStep();
    });

    it('Test Case 2: Should navigate to create bank account page', () => {
        bankAccountPage.clickOnCreateButton();
        cy.allure().startStep('Assert Create Bank Account Page Title');
        bankAccountPage.assertCreateBankAccountPageTitle('Create Bank Account'); 
        cy.allure().endStep();
    });


    it('Test Case 3: Should allow user to enter bank details and save', () => {
        cy.visit('/bankaccounts/new');
        bankAccountPage.enterBankNameTextField('CypressBankingSolution');
        bankAccountPage.enterRoutingNumberTextField('123456789');
        bankAccountPage.enterAccountNumberTextField('987654321');
        bankAccountPage.clickSaveButton();
    });

    it('Test Case 4: Should display the created bank account in the list', () => {
        cy.allure().startStep('Assert Created Bank Account is Visible in List');
        cy.get('ul[data-test="bankaccount-list"] li')
        .contains('CypressBankingSolution')
        .should('be.visible');
        cy.allure().endStep();
      });
})


   