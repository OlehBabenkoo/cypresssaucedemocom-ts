export default class Footer {
    private footerContainerLocator: string = '.footer_copy';

    public checkText(expectedText: string): this {
        cy.get(this.footerContainerLocator).contains(expectedText).scrollIntoView().should('have.text', expectedText);
        return this;
    }
}