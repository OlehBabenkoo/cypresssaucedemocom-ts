import BasePage from '../base/BasePage';
import Header from '../components/Header';
import CheckoutPageStepOne from './CheckoutPageStepOne';

export default class CartPage extends BasePage {
    public header: Header = new Header();
    private cartPageLocator: string = '#cart_contents_container';

    constructor() {
        super('Cart Page', 'cart.html');
    }

    private get cartPageCheckoutButton(): Cypress.Chainable {
        return cy.get(`${this.cartPageLocator} [class="btn_action checkout_button"]`);
    }
    private get cartList(): Cypress.Chainable {
        return cy.get(`${this.cartPageLocator} [class="cart_list"]`);
    }
    private get cartListItem(): Cypress.Chainable {
        return this.cartList.find('[class="cart_item"]');
    }
    public checkProductIsAddedToCardPage(): this {
        this.cartListItem.should('exist');
        return this;
    }
    public checkButton(buttonTitle: string): this {
        cy.contains('a', buttonTitle).should('have.text', buttonTitle);
        return this;
    }
    public clickForCheckout(): CheckoutPageStepOne {
        this.cartPageCheckoutButton.click();
        return new CheckoutPageStepOne();
    }
}