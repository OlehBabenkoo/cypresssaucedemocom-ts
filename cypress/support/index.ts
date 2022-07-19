import './commands';
declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
         logInWithSettedCookies(email: string,password:string): Chainable<Element>
      }
    }
  }