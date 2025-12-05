/// <reference types="cypress" />

/**
 * TypeScript Type Definitions for cypress-mochawesome-reporter
 * 
 * WHY THIS FILE EXISTS:
 * The cypress-mochawesome-reporter package doesn't include TypeScript type definitions.
 * This file manually declares the types so TypeScript understands how to use the plugin.
 * 
 * OPTIONAL DEPENDENCY:
 * If you prefer to use Cypress's built-in reporters instead, you can:
 * 1. Delete this file
 * 2. Remove 'cypress-mochawesome-reporter' from package.json devDependencies
 * 3. Remove the reporter configuration from cypress.config.ts:
 *    - Delete the import statement
 *    - Remove the 'reporter' and 'reporterOptions' properties
 *    - Remove the mochawesomeReporter() call from setupNodeEvents
 * 4. Run: npm uninstall cypress-mochawesome-reporter
 * 
 * Cypress will then use its default spec reporter (still provides good console output).
 */

declare module 'cypress-mochawesome-reporter/plugin' {
  export default function (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): void;
}

declare module 'cypress-mochawesome-reporter/register';
