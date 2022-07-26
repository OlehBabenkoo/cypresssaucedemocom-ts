import BasePage from '../base/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckoutComplete from './CheckoutComplete';

export default class CheckoutPageStepTwo extends BasePage {
    public header: Header = new Header();
    public footer: Footer = new Footer();

    constructor() {
        super('Checkout Page two', 'checkout-step-two.html');
    }

    private get finishButton(): Cypress.Chainable {
        return cy.get('[data-test="finish"]');
    }

    public clicktoFinishtheOrder(): CheckoutComplete {
        this.finishButton.should('have.text', 'Finish').click();
        return new CheckoutComplete();
    }
}