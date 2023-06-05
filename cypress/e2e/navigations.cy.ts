import { AccountType } from '../support/AccountType';
import Credentials from '../support/Credentials';
import InventoryPage from '../page-object/pages/InventoryPage';
import { SortTypes } from '../support/SortTypes';

const inventoryPage = new InventoryPage();

describe('Navigations test', () => {
    it('Checking the sorting of goods from the lowest price to the highest', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .header.sortedBy(SortTypes.PriceLowToHigh)
            .checkGoodsIsSortedByLowToHi();
    });

    it('Checking that the text on the shopping Cart Page corresponds to the expected result', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .header.clickCartLink()
            .checkPageUrl()
            .checkButton('Continue Shopping')
            .checkButton('CHECKOUT')
            .header.checkCartTitle();
    });

    it('Check text in footer',()=>{
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .footer.checkText('© 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });
});