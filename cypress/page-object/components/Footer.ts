export default class Footer {
    private footerContainerLocator: string = '.footer';

    private get socialLinkList(): Cypress.Chainable {
        return cy.get(this.footerContainerLocator).find('.social a');
    }

    public checkSocialLinks(): void {
        this.socialLinkList.each((link) => {
            cy.request({ method: 'GET', url: link.attr('href'), failOnStatusCode: false }).then((response) => {
                expect(response.status).eq(link.attr('href').includes('linkedin') ? 999 : 200);
            });
        });
    }
    public checkText(expectedText: string): this {
        cy.get(this.footerContainerLocator).contains(expectedText).scrollIntoView().should('have.text', expectedText);
        return this;
    }
}