import BasePage from '../base/BasePage';
import CheckoutPageStepTwo from './CheckoutPageStepTwo';

export default class CheckoutPageStepOne extends BasePage {

    constructor() {
        super('Checkout Page', 'checkout-step-one.html');
    }

    private get inputFirstNameField(): Cypress.Chainable {
        return cy.get('[data-test="firstName"]');
    }
    private get inputSecondNameField(): Cypress.Chainable {
        return cy.get('[data-test="lastName"]');
    }
    private get inputCodeField(): Cypress.Chainable {
        return cy.get('[data-test="postalCode"]');
    }
    private get continueButton(): Cypress.Chainable {
        return cy.get('[class="btn_primary cart_button"]');
    }
    private get errorMessage(): Cypress.Chainable {
        return cy.get('[data-test^="error"]');
    }
    private enterFirstName(firstName: string): this {
        this.inputFirstNameField.clear().type(firstName);
        return this;
    }
    private enterLastName(secondName: string): this {
        this.inputSecondNameField.clear().type(secondName);
        return this;
    }
    private enterPostalCode(postalCode: string): this {
        this.inputCodeField.clear().type(postalCode);
        return this;
    }
    public clickOnContinueButton(): this {
        this.continueButton.click();
        return this;
    }
    public checkingErrorMessage(errorMessage: string): this {
        this.errorMessage.should('have.text', errorMessage);
        return this;
    }
    public inputFirstName(firstName: string): this {
        this.enterFirstName(firstName)
        .clickOnContinueButton();
        return this;
    }
    public inputLastName(lastName: string): this {
        this.enterLastName(lastName)
        .clickOnContinueButton();
        return this;
    }
    public inputPostalCode(postalCode: string): CheckoutPageStepTwo {
        this.enterPostalCode(postalCode)
        .clickOnContinueButton();
        return new CheckoutPageStepTwo();
    }
    public fillClientInformationAndClickOnContinueButton(firstName: string, lastName: string, postalCode: string): CheckoutPageStepTwo {
        this.enterFirstName(firstName)
            .enterLastName(lastName)
            .enterPostalCode(postalCode)
            .clickOnContinueButton();
        return new CheckoutPageStepTwo();
    }
}