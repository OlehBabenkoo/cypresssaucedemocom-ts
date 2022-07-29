import InventoryPage from '../pages/InventoryPage';
import { SortTypes } from '../../support/SortTypes';
import CartPage from '../pages/CartPage';

export default class Header {
  private headerContainer: string = '#header_container';

  private get sortDropdown(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [data-test='product_sort_container']`
    );
  }
  private get headerTitle(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [class="title"]`);
  }
  private get cartImage(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [class="shopping_cart_link"]`);
  }
  private get productAddedInCart(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [class="shopping_cart_badge"]`);
  }
  private get backToProducts(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [data-test="back-to-products"]`);
  }

  public sortedBy(sortedTypes: SortTypes): InventoryPage {
    this.sortDropdown.select(sortedTypes);
    return new InventoryPage();
  }
  public checkInventoryTitle(): this {
    this.headerTitle.should('have.text', 'Products');
    return this;
  }
  public clickCartLink(): CartPage {
    this.cartImage.click();
    return new CartPage();
  }
  public checkCartTitle(): this {
    this.headerTitle.should('have.text', 'Your Cart');
    return this;
  }
  public checkThatCardHasProducts(): this {
    this.productAddedInCart.should('be.visible');
    return this;
  }
  public checkThatCardNotHaveProducts(): this {
    this.productAddedInCart.should('not.exist');
    return this;
  }
  public clickOnBackToProductButton():InventoryPage{
    this.backToProducts.click();
    return new InventoryPage();
  }
}