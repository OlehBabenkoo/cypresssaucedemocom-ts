export class BasePage {
  public pageName: string;
  public pageUrl: string;

  constructor({
    page_name,
    page_url,
  }: {
    page_name: string;
    page_url: string;
  }) {
    this.pageName = page_name;
    this.pageUrl = page_url;
  }

  visit(): this {
    cy.visit(this.pageUrl);
    return this;
  }

  checkPageUrl(): this {
    cy.location("href").should("include", this.pageUrl);
    return this;
  }
}
