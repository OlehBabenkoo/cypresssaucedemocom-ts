import LoginPage from '../page-object/pages/LoginPage';
import {AccountType} from '../support/AccountType';
import Credentials from '../support/Credentials';
import InventoryPage from '../page-object/pages/InventoryPage';
import {SortTypes} from "../support/SortTypes";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();


describe('Navigations test', () => {
    it('Login with \'standard\' user', () => {
        loginPage
            .visit()
            .checkPageUrl()
            .logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard))
            .checkPageUrl();
    });

    it('Login with \'problem\' user', () => {
        loginPage
            .visit()
            .checkPageUrl()
            .logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard))
            .checkPageUrl();
    });

    it('Login with \'standard\' user with set cookies', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl();
    });

    it.only('Checking the sorting of goods from the lowest price to the highest', () => {
        cy.logInWithoutUi(Credentials.getUserCredentials(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl()
            .header.sortedBy(SortTypes.PriceLowToHigh)
        });
});