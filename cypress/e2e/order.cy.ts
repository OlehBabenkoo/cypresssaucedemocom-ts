import { AccountType } from '../support/AccountType';
import Credentials from '../support/Credentials';
import InventoryPage from '../page-object/pages/InventoryPage';

const inventoryPage = new InventoryPage();

describe('Product order verification tests', () => {
    it('Product order (positive flow)', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .addFirstProductToCart()
            .header.clickCartLink()
            .checkProductIsAddedToCardPage()
            .clickForCheckout()
            .fillClientInformationAndClickOnContinueButton('Oleh', 'Babenko', '22000')
            .clickOnFinishButtonAndCompleteTheOrder()
            .checkCompleteText();
    });
    it('Checking for error messages when entering information about the customer', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .addFirstProductToCart()
            .header.clickCartLink()
            .clickForCheckout()
            .clickOnContinueButton()
            .checkingErrorMessage('Error: First Name is required')
            .inputFirstName('Oleh')
            .checkingErrorMessage('Error: Last Name is required')
            .inputLastName('Babenko')
            .checkingErrorMessage('Error: Postal Code is required')
            .inputPostalCode('22000');
    });
    it.only('Сheck that the product is added and removed from the basket', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .clickRandomProduct();
    });
});