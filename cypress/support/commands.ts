// ***********************************************
// Custom Commands
// 
// This file is used to create custom Cypress commands that can be reused across tests.
// Custom commands help make your tests more readable and maintainable.
//
// For more comprehensive examples of custom commands, visit:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * Example: Custom visit command with default options
 * 
 * This command wraps the standard cy.visit() with custom default options.
 * You can override these options when calling the command.
 */
Cypress.Commands.add('customVisit', (url: string, options?: Partial<Cypress.VisitOptions>) => {
  const defaultOptions: Partial<Cypress.VisitOptions> = {
    timeout: 30000,
    failOnStatusCode: true,
  };
  
  cy.visit(url, { ...defaultOptions, ...options });
});

/**
 * Example: Login command
 * 
 * This is a common pattern for authentication in tests.
 * Uncomment and modify for your application:
 */
// Cypress.Commands.add('login', (email: string, password: string) => {
//   cy.visit('/login');
//   cy.get('[data-cy="email-input"]').type(email);
//   cy.get('[data-cy="password-input"]').type(password);
//   cy.get('[data-cy="login-button"]').click();
//   cy.url().should('include', '/dashboard');
// });

/**
 * Example: API login command (faster than UI login)
 * 
 * Use this for faster test setup when you don't need to test the login UI:
 */
// Cypress.Commands.add('loginViaAPI', (email: string, password: string) => {
//   cy.request({
//     method: 'POST',
//     url: '/api/auth/login',
//     body: { email, password },
//   }).then((response) => {
//     window.localStorage.setItem('authToken', response.body.token);
//   });
// });

// ==================== TypeScript Declarations ====================
// Declare your custom commands here for TypeScript support

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom visit command with default timeout and options
       * @param url - URL to visit
       * @param options - Optional visit options to override defaults
       * @example cy.customVisit('https://example.com')
       */
      customVisit(url: string, options?: Partial<VisitOptions>): Chainable<void>;

      /**
       * Custom login command (example - uncomment implementation above)
       * @param email - User email
       * @param password - User password
       * @example cy.login('user@example.com', 'password123')
       */
      // login(email: string, password: string): Chainable<void>;

      /**
       * Login via API (example - uncomment implementation above)
       * @param email - User email
       * @param password - User password
       * @example cy.loginViaAPI('user@example.com', 'password123')
       */
      // loginViaAPI(email: string, password: string): Chainable<void>;
    }
  }
}

export {};