export default class Footer {
    private footerContainerLocator: string = '.footer';

    private get socialLinkList(): Cypress.Chainable {
        return cy.get(this.footerContainerLocator).find('.social a');
    }
    private get copyTextInFooter(): Cypress.Chainable {
        return cy.get(this.footerContainerLocator).find('.footer_copy');
    }

    public checkSocialFooterLinks(): void {
        this.socialLinkList.each((link) => {
            cy.request({ method: 'GET', url: link.attr('href'), failOnStatusCode: false }).then((response) => {
                const expectedStatusCode = link.attr('href').includes('linkedin') ? 999 : 200;
                expect(response.status).eq(expectedStatusCode);
            });
        });
    }
    public checkTextInFooter(text: string): this {
        this.copyTextInFooter.should('have.text', text).scrollIntoView();
        return this;
    }
}