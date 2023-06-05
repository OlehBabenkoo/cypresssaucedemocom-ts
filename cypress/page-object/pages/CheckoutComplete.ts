import BasePage from '../base/BasePage';

export default class CheckoutComplete extends BasePage {
    private checkoutCompleteLocator: string = '#checkout_complete_container';

    constructor() {
        super('Checkout Complete', 'checkout-complete.html');
    }

    private get completeText(): Cypress.Chainable {
        return cy.get(`${this.checkoutCompleteLocator} [class="complete-text"]`);
    }
}