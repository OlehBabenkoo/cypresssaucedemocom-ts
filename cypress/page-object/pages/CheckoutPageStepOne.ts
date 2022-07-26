import BasePage from '../base/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckoutPageStepTwo from './CheckoutPageStepTwo';

export default class CheckoutPageStepOne extends BasePage{
    public header: Header = new Header();
    public footer: Footer = new Footer();

    constructor() {
        super('Checkout Page', 'checkout-step-one.html');
    }

    private get inputFirtNameField(): Cypress.Chainable {
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
    private enterFirtName(firstName: string): this {
        this.inputFirtNameField.clear().type(firstName);
        return this;
    }
    private enterSecondName(secondName: string): this {
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

    public placingAnOrder(firstName:string,secondName:string,postalCode:string): CheckoutPageStepTwo {
        this.enterFirtName(firstName)
            .enterSecondName(secondName)
            .enterPostalCode(postalCode)
            .clickOnContinueButton();
        return new CheckoutPageStepTwo();
    }
}