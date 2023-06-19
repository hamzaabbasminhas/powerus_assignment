declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      registerUser(): Chainable<Element>;
      setup(device:string): Chainable<Element>;
      enterUserData(type: string, data: string): Chainable<Element>;
    }
  }