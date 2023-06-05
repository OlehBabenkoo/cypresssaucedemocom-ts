import Header from '../components/Header';
import BasePage from '../base/BasePage';
import Footer from '../components/Footer';
import InventoryItemPage from './InventoryItemPage';

export default class InventoryPage extends BasePage {
    public header: Header = new Header();
    public footer: Footer = new Footer();
    private inventoryContainer: string = '#inventory_container';
    private inventoryItemTitleLocator: string = '.inventory_item_name';
    private inventoryItemDescLocator: string = '.inventory_item_desc';
    private inventoryItemPriceLocator: string = '.inventory_item_price';
    private inventoryItemButtonLocator: string = '[data-test^="add-to-cart"]';
    private inventoryTitleListLocator: string = '[id$="title_link"]';

    constructor() {
        super('Inventory Page', 'inventory.html');
    }

    private get inventoryItems(): Cypress.Chainable {
        return cy.get(`${this.inventoryContainer} [class="inventory_item"]`);
    }
    private getArrayOfItemsPrice(): Cypress.Chainable {
        return this.inventoryItems.find(this.inventoryItemPriceLocator).then(($inventoryItemPrice) => {
            return Cypress._.map(Cypress.$.makeArray($inventoryItemPrice), 'innerText').map(price => price.replace('$', ''));
        });
    }
    private choseRandomProductThatHasAddToCardButtonAndClickOn(countOfRandomProduct: number): void {
        this.inventoryItems.then(inventoryItems => {
            if (countOfRandomProduct > inventoryItems.length) throw Error(`Count \'${countOfRandomProduct}\'of random product is bigger then products on the page`);
            cy.wrap(inventoryItems)
                .eq(Cypress._.random(inventoryItems.length - 1)).then(inventoryItem => {
                    if (inventoryItem.find(this.inventoryItemButtonLocator).text() === 'Add to cart') {
                        cy.wrap(inventoryItem.find(this.inventoryItemButtonLocator)).click();
                    }
                    else {
                        this.choseRandomProductThatHasAddToCardButtonAndClickOn(countOfRandomProduct);
                    }
                });
        });
    }
    public choseRandomProductThatHasAddToCardButton(countOfRandomProduct: number): this {
        for (let i = 0; i < countOfRandomProduct; i++) {
            this.choseRandomProductThatHasAddToCardButtonAndClickOn(countOfRandomProduct);
        }
        return this;
    }
    public checkProductsField(): this {
        this.inventoryItems.each(inventoryItem => {
            cy.wrap(inventoryItem).find(this.inventoryItemTitleLocator).should('be.visible');
            cy.wrap(inventoryItem).find(this.inventoryItemDescLocator).should('be.visible');
            cy.wrap(inventoryItem).find(this.inventoryItemPriceLocator).should('be.visible');
        });
        return this;
    }
    public checkGoodsIsSortedByLowToHi(): this {
        this.getArrayOfItemsPrice().each((currentItemPrice, index, list) => {
            if (list.length - 1 != index) {
                expect(Number(currentItemPrice)).lte(Number(list[index + 1]));
            }
        });
        return this;
    }
    public addFirstProductToCart(): this {
        this.inventoryItems.eq(0).contains('button', 'ADD TO CART').click();
        return this;
    }
    public clickOnRandomProduct(): InventoryItemPage {
        this.inventoryItems.then(inventoryItems => {
            cy.wrap(inventoryItems)
                .eq(Cypress._.random(inventoryItems.length - 1))
                .find(this.inventoryTitleListLocator)
                .click();
        });
        return new InventoryItemPage();
    }

}