export default class Footer {
    private footerContainerLocator: string = '.footer';

    private get linkList():Cypress.Chainable {
        return cy.get(this.footerContainerLocator).find('.social a');
    }
public checkFooterLinks():any{
    this.linkList.each((link) => {
        cy.request({ method: 'GET', url: link.attr('href'), failOnStatusCode: false }).then((response) => {
            expect(response.status).eq(200);
        });
    });
}
}