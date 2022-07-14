import LoginPage from "../page-object/pages/loginPage";
const loginPage = new LoginPage();

describe('Navigations test', () => {
  it('Open SWAGLABS Login site', () => {
    loginPage
    .visit()
    .checkPageUrl();
  });
});