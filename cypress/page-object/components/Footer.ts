export default class Footer {
    private footerContainerLocator: string = '.footer';

    private get socialLinkList(): Cypress.Chainable {
        return cy.get(this.footerContainerLocator).find('.social a');
    }
    private get copyTextInFooter(): Cypress.Chainable {
        return cy.get(this.footerContainerLocator).find('.footer_copy');
    }

    public checkSocialLinks(): void {
        this.socialLinkList.each((link) => {
            cy.request({ method: 'GET', url: link.attr('href'), failOnStatusCode: false }).then((response) => {
                link.attr('href').includes('linkedin') ? 999 : 200;
                expect(response.status).eq(link.attr('href').includes('linkedin') ? 999 : 200);
            });
        });
    }
    public checkText(expectedText: string): this {
        this.copyTextInFooter.scrollIntoView().should('have.text', expectedText);
        return this;
    }
}