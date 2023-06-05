import { AccountType } from '../support/AccountType';
import Credentials from '../support/Credentials';
import InventoryPage from '../page-object/pages/InventoryPage';
import InventoryItemPage from '../page-object/pages/InventoryItemPage';

const inventoryPage = new InventoryPage();
const inventoryItemPage = new InventoryItemPage();

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
            .clickOnFinishButtonAndCompleteTheOrder();
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
    it('Сheck that the product is added and removed from the basket', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .clickOnRandomProduct()
            .checkProductFields()
            .addProductToCart();
            inventoryItemPage.removeProductFromCard()
            .header.clickOnBackToProductButton()
            .checkPageUrl();
    });
    it('Check that all products have a title, description, price and a button to add to the card', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .checkProductsField();
    });
});