import Header from '../components/Header';
import BasePage from '../base/BasePage';
import Footer from '../components/Footer';

export default class InventoryPage extends BasePage {
    public header: Header = new Header();
    public footer : Footer = new Footer();

    constructor() {
        super('Inventory Page', 'inventory.html');
    }
}