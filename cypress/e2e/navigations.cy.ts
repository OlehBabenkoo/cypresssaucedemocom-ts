import LoginPage from '../page-object/pages/LoginPage';
const loginPage = new LoginPage();

describe('Navigations test', () => {
  it('Open SWAGLABS Login site', () => {
    loginPage
    .visit()
    .checkPageUrl();
  });
});