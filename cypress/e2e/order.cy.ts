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
            .addProductToCart()
            .header.clickCartLink()
            //.checkOrderName('Sauce Labs Backpack');
            .clickForCheckout()
            .placingAnOrder('Oleh', 'Babenko', '22000')
            .clicktoFinishtheOrder()
            .checkCompleteText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
            .clickOnTheBackHomeButton();

    });
});