export default abstract class BasePage{
    readonly PAGE_NAME: string;
    readonly PAGE_URL: string;
  
    constructor(pageName: string, pageUrl: string = "") {
      this.PAGE_NAME = pageName;
      this.PAGE_URL = pageUrl;
    }
  
    visit(): this {
      cy.visit(`${Cypress.config("baseUrl")}${this.PAGE_URL}`);
      return this;
    }
  
    checkPageUrl(): this {
      cy.location("href").
      should("include",`${Cypress.config("baseUrl")}${this.PAGE_URL}`);
      return this;
    }
  };