import { AccountType } from '../support/AccountType';
import Credentials from '../support/Credentials';
import InventoryPage from '../page-object/pages/InventoryPage';
import { SortTypes } from '../support/SortTypes';

const inventoryPage = new InventoryPage();

describe('Navigations test', () => {
    it.only('Checking the sorting of goods from the lowest price to the highest', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .header.sortedBy(SortTypes.PriceLowToHigh)
            .checkGoodsIsSortedByLowToHi();
    });

    it('Checking that there is a Product heading on the Inventory Page', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .header.checkInventoryTitle();
    });

    it('Checking that the text on the shopping Cart Page corresponds to the expected result', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .header.clickCartLink()
            .checkPageUrl()
            .checkButton('Continue Shopping')
            .checkButton('Checkout')
            .header.checkCartTitle();
    });

    it('Check links in footer', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .footer.checkSocialLinks();
    });

    it('Check text in foooter',()=>{
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .footer.checkText('© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });
});