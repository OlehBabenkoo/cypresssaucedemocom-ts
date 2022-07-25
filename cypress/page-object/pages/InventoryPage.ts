import Header from '../components/Header';
import BasePage from '../base/BasePage';
import Footer from '../components/Footer';
import Inventory from '../components/Inventory';

export default class InventoryPage extends BasePage {
    public header: Header = new Header();
    public footer : Footer = new Footer();
    public inventory: Inventory = new Inventory();

    constructor() {
        super('Inventory Page', 'inventory.html');
    }
}