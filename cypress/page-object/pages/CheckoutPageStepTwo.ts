import BasePage from '../base/BasePage';
import CheckoutComplete from './CheckoutComplete';

export default class CheckoutPageStepTwo extends BasePage {

    constructor() {
        super('Checkout Page two', 'checkout-step-two.html');
    }

    private get finishButton(): Cypress.Chainable {
        return cy.get('[class="btn_action cart_button"]');
    }

    public clickOnFinishButtonAndCompleteTheOrder(): CheckoutComplete {
        this.finishButton.click();
        return new CheckoutComplete();
    }
}