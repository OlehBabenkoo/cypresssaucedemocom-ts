import BasePage from '../base/BasePage';
import InventoryPage from './InventoryPage';

export default class LoginPage extends BasePage {

    constructor() {
        super('LogIn Page');
    }

    private get inputEmailField(): Cypress.Chainable {
        return cy.get('[data-test="username"]');
    }

    private get inputPasswordField(): Cypress.Chainable {
        return cy.get('[data-test="password"]');
    }

    private get logInButton(): Cypress.Chainable {
        return cy.get('[data-test="login-button"]');
    }

    private enterEmail(userName: string): this {
        this.inputEmailField.clear().type(userName);
        return this;
    }

    private enterPassword(userPassword: string): this {
        this.inputPasswordField.clear().type(userPassword);
        return this;
    }

    private clickOnLogInButton(): void {
        this.logInButton.click();
    }

    public logInWithCredantials(userName: string, userPassword: string): InventoryPage {
        this.enterEmail(userName)
            .enterPassword(userPassword)
            .clickOnLogInButton();
        return new InventoryPage();
    }
}