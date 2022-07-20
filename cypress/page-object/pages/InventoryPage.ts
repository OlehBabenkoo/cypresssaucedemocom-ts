import Header from '../components/Header';
import BasePage from '../base/BasePage';

export default class InventoryPage extends BasePage {
    public header: Header = new Header();

    constructor() {
        super('Inventory Page', 'inventory.html');
    }
}