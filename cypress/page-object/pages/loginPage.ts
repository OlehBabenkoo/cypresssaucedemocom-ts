import { BasePage } from "../base/basePage";

export class LoginPage extends BasePage {
  constructor() {
    super({ page_name: 'LoginPage', page_url: 'https://www.saucedemo.com/' });
  }
}