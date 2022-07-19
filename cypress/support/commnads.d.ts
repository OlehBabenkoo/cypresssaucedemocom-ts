import './commands';

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * A command that helps to use cookies as a means of logging into the page.
             * @example cy.setCookie('session-username', userName, {expires: date});
             * @param  userName - helps us retrieve user data.
             * @param 'session-username' - helps to refer to the right cookie name
             * @param {expires: date} - helps us give cookies the right amount of time
             */

            logInWithoutUi(credentials: any): void
        }
    }
}