import InventoryPage from '../page-object/pages/InventoryPage';
import LoginPage from '../page-object/pages/LoginPage';
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Navigations test', () => {
  it('Login with standart user', () => {
    const userName = Cypress.env('accounts')['standart']['userName'];
    const userPassword = Cypress.env('accounts')['standart']['password'];
    loginPage
    .visit()
    .checkPageUrl()
    .logInWithCredantials(userName,userPassword);
    inventoryPage.checkPageUrl();
  });
});