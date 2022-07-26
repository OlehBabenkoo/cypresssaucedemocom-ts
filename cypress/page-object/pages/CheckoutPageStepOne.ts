import BasePage from '../base/BasePage';
import CheckoutPageStepTwo from './CheckoutPageStepTwo';

export default class CheckoutPageStepOne extends BasePage{

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
    private get ContinueButton(): Cypress.Chainable {
        return cy.get('[data-test="continue"]');
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
    private clickOnContinueButton(): void {
        this.ContinueButton.click();
    }

    public fillClientInformationAndClickOnContinueButton(firstName:string, lastName:string, postalCode:string): CheckoutPageStepTwo {
        this.enterFirstName(firstName)
            .enterLastName(lastName)
            .enterPostalCode(postalCode)
            .clickOnContinueButton();
        return new CheckoutPageStepTwo();
    }
}