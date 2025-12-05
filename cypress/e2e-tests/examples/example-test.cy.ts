import { ExamplePage } from '../../page-object-model';

/**
 * Example Test Suite
 * 
 * This is a simple example demonstrating:
 * - How to use the Page Object Model pattern
 * - Basic Cypress commands and assertions
 * - Using fixtures
 * - Using custom commands
 */
describe('Example Test Suite', () => {
  let examplePage: ExamplePage;

  before(() => {
    // Initialize page object
    examplePage = new ExamplePage();
  });

  beforeEach(() => {
    // Visit the page before each test
    examplePage.visit();
  });

  it('should load the page successfully', () => {
    // Verify page title
    cy.title().should('include', 'Example Domain');
    
    // Verify page heading using page object
    examplePage.getHeading().should('be.visible');
    examplePage.getHeading().should('contain.text', 'Example Domain');
  });

  it('should interact with page elements', () => {
    // Example of interacting with elements through page object
    examplePage.getHeading().should('be.visible');
    examplePage.getParagraph().should('contain.text', 'domain');
    
    // Example of clicking a link
    examplePage.getLearnMoreLink().should('have.attr', 'href');
  });

  it('should use fixture data', () => {
    // Load fixture data
    cy.fixture('example').then((data) => {
      // Use fixture data in your test
      cy.log(`Fixture name: ${data.name}`);
      cy.log(`Fixture email: ${data.email}`);
      
      // You can use this data for form inputs, assertions, etc.
      expect(data.name).to.not.be.empty;
      expect(data.email).to.include('@');
    });
  });

  it('should demonstrate custom command', () => {
    // Example using a custom command
    // Custom commands are defined in cypress/support/commands.ts
    cy.log('Visit the page using custom command');
    cy.customVisit('https://example.com');
    
    cy.title().should('include', 'Example Domain');
  });

  it('should verify multiple elements', () => {
    // Example of chaining assertions
    examplePage.getHeading()
      .should('be.visible')
      .and('contain.text', 'Example');
    
    // Example of verifying element count
    examplePage.getAllParagraphs().should('have.length.greaterThan', 0);
  });
});
