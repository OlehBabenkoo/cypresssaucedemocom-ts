import InventoryPage from '../pages/InventoryPage';
import {SortTypes} from '../../support/SortTypes';

export default class Header {
  private headerContainer: string = '#header_container';

  private get sortDropdown(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [data-test='product_sort_container']`
    );
  }
  private get headerTitle(): Cypress.Chainable {
    return cy.get(`${this.headerContainer} [class="title"]`);
  }
  public sortedBy(sortedTypes: SortTypes): InventoryPage {
    this.sortDropdown.select(sortedTypes);
    return new InventoryPage();
  }
  public checkInventoryTitle(): this {
    this.headerTitle.should('have.text','Products');
    return this;
  }
}