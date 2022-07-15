import BasePage from '../base/BasePage';

export default class LoginPage extends BasePage {
  public EMAIL: string = 'input[type=text';
  public PASSWORD: string = 'input[type=password';
  public SUBMIT: string = 'input[type=submit';
  constructor() {
    super('LogIn Page');
  }

  get inputEmail(): Cypress.Chainable {
    return cy.get(this.EMAIL).clear();
  }
  get inputPassword(): Cypress.Chainable {
    return cy.get(this.PASSWORD).clear();
  }
  get clickOnButton(): Cypress.Chainable {
    return cy.get(this.SUBMIT);
  }

  public enterEmail():this{
   this.inputEmail.type(Cypress.env('standartUser'));
    return this;
  }
  public enterPassword():this{
   this.inputPassword.type(Cypress.env('password'));
    return this;
  }
  public  clickOnSumbitButton():this{
   this.clickOnButton.click();
    return this;
  }
};