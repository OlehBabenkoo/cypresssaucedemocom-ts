import BasePage from '../base/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InventoryPage from './InventoryPage';

export default class CheckoutComplete extends BasePage {
    public header: Header = new Header();
    public footer: Footer = new Footer();
    private checkoutCompleteLocator: string = '#checkout_complete_container';

    constructor() {
        super('Checkout Complete', 'checkout-complete.html');
    }

    private get completeText(): Cypress.Chainable {
        return cy.get(`${this.checkoutCompleteLocator} [class="complete-text"]`);
    }
    private get backHomeButton(): Cypress.Chainable {
        return cy.get(`${this.checkoutCompleteLocator} [data-test="back-to-products"]`);
    }

    public checkCompleteText(completeText: string): this {
        this.completeText.should('have.text', completeText);
        return this;
    }
    public clickOnTheBackHomeButton(): InventoryPage {
        this.backHomeButton.should('have.text', 'Back Home').click();
        return new InventoryPage();
    }
}