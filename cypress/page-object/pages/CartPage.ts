import BasePage from '../base/BasePage';
import Header from '../components/Header';

export default class CartPage extends BasePage{
    public header: Header = new Header();
    constructor() {
        super('Cart Page', 'cart.html');
    }
    private get continueButton(): Cypress.Chainable {
        return cy.get('[data-test="continue-shopping"]');
    }
    private get checkoutButton(): Cypress.Chainable {
        return cy.get('[data-test="checkout"]');
    }
    private  textContinueButton(text:string):this{
        this.continueButton.should('have.text',text);
        return this;
    }
    private  textCheckoutButton(checkout:string):this{
        this.checkoutButton.should('have.text',checkout);
        return this;
    }
    public checkTextInButtons(text:string,checkout:string) : this{
        this.textContinueButton(text)
            .textCheckoutButton(checkout);
        return this;
    }
}