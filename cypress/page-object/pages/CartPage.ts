import BasePage from '../base/BasePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckoutPageStepOne from './CheckoutPageStepOne';

export default class CartPage extends BasePage {
    public header: Header = new Header();
    public footer: Footer = new Footer();
    private cartPageLocator: string = '#cart_contents_container';

    constructor() {
        super('Cart Page', 'cart.html');
    }

    private get cartPageCheckoutButton(): Cypress.Chainable {
        return cy.get(`${this.cartPageLocator} [data-test="checkout"]`);
    }
    /*private get cartList(): Cypress.Chainable {
        return cy.get(`${this.cartPageLocator} [class="cart_list"]`);
    }
    private get cartListItem(): Cypress.Chainable {
        return cy.get(`${this.cartList} [class="inventory_item_name]`);
    }
    public checkOrderName(orderName: string): this {
        this.cartListItem.should('have.text', orderName);
        return this;
    }
    */
    public checkButton(buttonTitle: string): this {
        cy.contains('button', buttonTitle).should('have.text', buttonTitle);
        return this;
    }
    public clickForCheckout(): CheckoutPageStepOne {
        this.cartPageCheckoutButton.should('have.text', 'Checkout').click();
        return new CheckoutPageStepOne();
    }

}