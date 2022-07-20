import SortProduct from '../../support/SortProduct';
import BasePage from '../base/BasePage';

export default class ProductList extends BasePage {
    private get findBurgerButton(): Cypress.Chainable {
        return cy.get('[data-test="product_sort_container"]');
    }
    private get priceComparasion():Cypress.Chainable{
        return cy.get (':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price');
     }

     private clickContainer(): this {
        this.findBurgerButton.select('');
        return this;
     }
    private checkPrice():this{
        this.priceComparasion.contains(Cypress.env('price')['lowPrice']);
        return this;
     }
     public sortItemWithPrice(sortProduct:any):this{
      const {text} = sortProduct;
        this.clickContainer(text)
        .checkPrice();
        return this;
     }
}