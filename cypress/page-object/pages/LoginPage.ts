import BasePage from '../base/BasePage';
import InventoryPage from './InventoryPage';

export default class LoginPage extends BasePage {
  public EMAIL: string = 'input[type=text';
  public PASSWORD: string = 'input[type=password';
  public SUBMIT: string = 'input[type=submit';
  constructor() {
    super('LogIn Page');
  }

  private get inputEmail(): Cypress.Chainable {
    return cy.get(this.EMAIL);
  }
  private get inputPassword(): Cypress.Chainable {
    return cy.get(this.PASSWORD);
  }
  private get clickOnButton(): Cypress.Chainable {
    return cy.get(this.SUBMIT);
  }

  private enterEmail(userName:string):this{
   this.inputEmail.clear();
    return this;
  }
  private enterPassword(userPassword:string):this{
   this.inputPassword.clear();
    return this;
  }
 private  clickOnSumbitButton():this{
   this.clickOnButton.click();
    return this;
  }
  logInWithCredantials(userName:string,userPassword:string):void{
    this.enterEmail(userName);
    this.enterPassword(userPassword);
    this.clickOnSumbitButton();
    return new InventoryPage();
  }
}