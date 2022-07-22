export default class Footer {
    private footerContainerLocator: string = '.footer';

    private get socialLinkList(): Cypress.Chainable {
        return cy.get(this.footerContainerLocator).find('.social a');
    }

    public checkSocialFooterLinks(): void {
        this.socialLinkList.each((link) => {
            cy.request({ method: 'GET', url: link.attr('href'), failOnStatusCode: false }).then((response) => {
                const expectedStatusCode = link.attr('href').contains('linkedin')? 999 : 200;
                expect(response.status).eq(expectedStatusCode);
            });
        });
    }
}