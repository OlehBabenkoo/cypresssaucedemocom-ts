import BasePage from '../base/BasePage';
import InventoryPage from './InventoryPage';

export default class LoginPage extends BasePage {

    constructor() {
        super('LogIn Page','index.html');
    }

    private get inputEmailField(): Cypress.Chainable {
        return cy.get('[data-test="username"]');
    }

    private get inputPasswordField(): Cypress.Chainable {
        return cy.get('[data-test="password"]');
    }

    private get logInButton(): Cypress.Chainable {
        return cy.get('#login-button');
    }

    private get errorText():Cypress.Chainable{
        return cy.get('[data-test="error"]');
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

    public checkErrorMessage(text:string) : this{
        this.errorText.should('have.text', text);
        return this;
    }

    public logInWithCredentials(credentials: any): InventoryPage {
        const {userName, password} = credentials;
        this.enterEmail(userName)
            .enterPassword(password)
            .clickOnLogInButton();
        return new InventoryPage();
    }
    public checkThanFieldEmpty(): this {
        this.inputEmailField.should('have.value', '');
        this.inputPasswordField.should('have.value', '');
        return this;
    }
}