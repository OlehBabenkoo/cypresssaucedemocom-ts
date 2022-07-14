import { LoginPage } from "../page-object/pages/loginPage";

const loginPage = new LoginPage();
describe('Navigation test', () => {
  it('Open SWAGLABS site', () => {
    loginPage.visit()
    .checkPageUrl();
  });
});
