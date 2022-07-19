import LoginPage from '../page-object/pages/LoginPage';
import {AccountType} from '../support/AccountType';
import Credentials from '../support/Credentials';

const loginPage = new LoginPage();

describe('Navigations test', () => {
    it('Login with \'standard\' user', () => {
        loginPage
            .visit()
            .checkPageUrl()
            .logInWithCredantials(Credentials.getUserName(AccountType.Standard), Credentials.getUserPassword(AccountType.Standard))
            .checkPageUrl();
    });

    it('Login with \'problem\' user', () => {
        loginPage
            .visit()
            .checkPageUrl()
            .logInWithCredantials(Credentials.getUserName(AccountType.Problem), Credentials.getUserPassword(AccountType.Problem))
            .checkPageUrl();
    });

    it('Login with \'standard\' user with set cookies', () => {
        cy.logInWithSettedCookies(Credentials.getUserName(AccountType.Standard), Credentials.getUserPassword(AccountType.Standard));
        inventoryPage
            .visit()
            .checkPageUrl();
    });
});