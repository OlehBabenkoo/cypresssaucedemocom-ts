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
});