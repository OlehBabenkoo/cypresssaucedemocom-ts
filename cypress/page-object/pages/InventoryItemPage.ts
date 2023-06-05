import BasePage from '../base/BasePage';
import Header from '../components/Header';

export default class InventoryItemPage extends BasePage {
    public header: Header = new Header();
    private inventoryContainer: string = '#inventory_item_container';

    constructor() {
        super('Inventory-item', 'inventory-item.html?id=');
    }

    private get inventoryItem(): Cypress.Chainable {
        return cy.get(`${this.inventoryContainer} [class="inventory_details_container"]`);
    }
    private get inventoryItemTitle(): Cypress.Chainable {
        return cy.get(`${this.inventoryContainer} [class="inventory_details_name"]`);
    }
    private get inventoryItemDescription(): Cypress.Chainable {
        return cy.get(`${this.inventoryContainer} [class="inventory_details_desc"]`);
    }
    private get inventoryItemPrice(): Cypress.Chainable {
        return cy.get(`${this.inventoryContainer} [class="inventory_details_price"`);
    }

    private checkItemTitle(): this {
        this.inventoryItemTitle.should('be.visible');
        return this;
    }
    private checkItemDescription(): this {
        this.inventoryItemDescription.should('be.visible');
        return this;
    }
    private checkItemPrice(): this {
        this.inventoryItemPrice.should('be.visible');
        return this;
    }
    public checkProductFields(): this {
        this.checkItemTitle()
            .checkItemDescription()
            .checkItemPrice();
        return this;

    }
    public addProductToCart(): this {
        this.inventoryItem.contains('button', 'ADD TO CART').click();
        return this;
    }
    public removeProductFromCard(): this {
        this.inventoryItem.contains('button', 'REMOVE').click();
        return this;
    }
}