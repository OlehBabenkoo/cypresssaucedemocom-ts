import LoginPage from '../page-object/pages/LoginPage';
import {AccountType} from '../support/AccountType';
import Credentials from '../support/Credentials';
import InventoryPage from '../page-object/pages/InventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Login and Logout test', () => {
    it('Login with \'standard\' user', () => {
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

    it('Login with \'locked\' user', () => {
        loginPage
          .visit()
          .checkPageUrl()
          .logInWithCredentials(Credentials.getUserCredentials(AccountType.LocKed));
        loginPage.checkErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });
    it('Login with \'standard\' user and log out of the account to check that the fields are empty', () => {
        loginPage
            .visit()
            .checkPageUrl()
            .logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard))
            .header.clickOnSlideMenu()
            .clickOnLogOutInSlideMenu()
            .checkPageUrl()
            .checkThanFieldEmpty();
    });
});