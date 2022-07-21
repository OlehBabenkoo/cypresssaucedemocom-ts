import BasePage from '../base/BasePage';
import Header from '../components/Header';

export default class CartPage extends BasePage{
    public header: Header = new Header();
    constructor() {
        super('Cart Page', 'cart.html');
    }
    public checkButton(buttonTitle: string): this {
        cy.contains('button', buttonTitle).should('have.text', buttonTitle);
        return this;
    }
}