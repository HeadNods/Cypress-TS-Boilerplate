
// ***********************************************************
// Support File (e2e.ts)
// 
// This file is automatically loaded before every test file.
// It's the perfect place for:
// - Importing custom commands
// - Setting up global hooks (beforeEach, before, after, afterEach)
// - Configuring global behavior
// - Adding event listeners
// 
// This file is specified in cypress.config.ts via the 'supportFile' option.
// 
// Learn more: https://on.cypress.io/configuration
// ***********************************************************

// Import custom commands (REQUIRED for commands.ts to work)
import './commands';

// ==================== Global Hooks (Optional) ====================
// Uncomment and use these for setup/teardown that applies to ALL tests

// beforeEach(() => {
//   // Runs before each test in every spec file
//   // Example: Clear cookies, reset database, set viewport
//   cy.clearCookies();
//   cy.clearLocalStorage();
// });

// before(() => {
//   // Runs once before all tests
//   // Example: Seed database, setup test data
// });

// afterEach(() => {
//   // Runs after each test
//   // Example: Take screenshots on failure, log results
// });

// after(() => {
//   // Runs once after all tests
//   // Example: Cleanup, send reports
// });

// ==================== Global Configuration (Optional) ====================

// Example: Set default timeout for all tests
// Cypress.config('defaultCommandTimeout', 10000);

// Example: Ignore uncaught exceptions from application
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // Return false to prevent Cypress from failing the test
//   // Use this carefully - you might miss real errors!
//   return false;
// });

// Example: Add custom behavior before each command
// Cypress.on('command:start', (command) => {
//   console.log(`Running command: ${command.get('name')}`);
// });