import BasePage from '../base/BasePage';
import Header from '../components/Header';

export default class InventoryItemPage extends BasePage {
    public header: Header = new Header();
    private inventoryContainer: string = '#inventory_item_container';

    constructor() {
        super('Inventory-item', 'inventory-item.html?id=');
    }

    private get inventoryItem(): Cypress.Chainable {
        return cy.get(`${this.inventoryContainer} [class="inventory_details"]`);
    }
    private get inventoryItemTitle(): Cypress.Chainable {
        return cy.get(`${this.inventoryContainer} [class="inventory_details_name large_size"]`);
    }
    private get inventoryItemDesciption(): Cypress.Chainable {
        return cy.get(`${this.inventoryContainer} [class="inventory_details_desc large_size"]`);
    }
    private get inventoryItemPrice(): Cypress.Chainable {
        return cy.get(`${this.inventoryContainer} [class="inventory_details_price"`);
    }

    private checkItemTitle(): this {
        this.inventoryItemTitle.should('be.visible');
        return this;
    }
    private checkItemDescription(): this {
        this.inventoryItemDesciption.should('be.visible');
        return this;
    }
    private checkItemPrice(): this {
        this.inventoryItemPrice.should('be.visible');
        return this;
    }
    public checkProductField(): this {
        this.checkItemTitle()
            .checkItemDescription()
            .checkItemPrice();
        return this;

    }
    public addProductToCart(): this {
        this.inventoryItem.contains('button', 'Add to cart').click();
        return this;
    }
    public removeProductFromCard(): this {
        this.inventoryItem.contains('button', 'Remove').click();
        return this;
    }
}