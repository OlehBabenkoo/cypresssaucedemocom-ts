Cypress.Commands.add('logInWithoutUi', (credentials: any): void => {
    const {userName, password} = credentials;
    let date: Date = new Date();
    date.setTime(date.getTime() + 10 * 60 * 1000);
    cy.setCookie('session-username', userName, {expires: date});
});