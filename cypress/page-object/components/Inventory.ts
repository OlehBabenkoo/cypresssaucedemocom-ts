export default class Inventory {
    private inventoryContainer: string = '#inventory_container';
    private get inventoryItem(): Cypress.Chainable {
        return cy.get(`${this.inventoryContainer} [class="inventory_list"]`);
    }
    public sortPriceItem(): any {
        const len :number = this.inventoryItem.find('.inventory_item').its('length');
        this.inventoryItem.find('.inventory_item_price').each(($ele, index) => {
            if (index < len) {
                cy.wrap($ele)
                    .eq(index)
                    .invoke('text')
                    .then((price1) => {
                        cy.wrap($ele)
                            .eq(index + 1)
                            .invoke('text')
                            .then((price2) => {
                                expect(+price1.trim()).to.be.greaterThan(+price2.trim());
                            });
                    });
            }
        });

        }
        public sortPriceWithoutDollars(): this{
             const price:number = this.sortPriceItem.replace(/\$ /g, '');
            return this;
    }
}