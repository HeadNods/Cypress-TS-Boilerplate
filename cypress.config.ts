import { defineConfig } from "cypress";
import mochawesomeReporter from 'cypress-mochawesome-reporter/plugin';

/**
 * Cypress Configuration
 * 
 * This file configures Cypress test runner settings and reporter options.
 * 
 * MOCHAWESOME REPORTER (OPTIONAL):
 * This boilerplate uses cypress-mochawesome-reporter for beautiful HTML test reports.
 * It requires a custom type definition file (cypress-mochawesome-reporter.d.ts) because
 * the package doesn't include TypeScript types.
 * 
 * To remove Mochawesome and use Cypress's default reporter:
 * 1. Delete the import above
 * 2. Remove 'reporter' and 'reporterOptions' properties below
 * 3. Remove mochawesomeReporter(on, config) from setupNodeEvents
 * 4. Delete cypress-mochawesome-reporter.d.ts file
 * 5. Run: npm uninstall cypress-mochawesome-reporter
 */

export default defineConfig({
  // Mochawesome Reporter Configuration (OPTIONAL - see comment above)
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress TS Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports',
    reportFilename: 'cypress-ts-test-report',
    html: true,
    json: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Register Mochawesome reporter (OPTIONAL - see comment above)
      mochawesomeReporter(on, config);
      return config;
    },
    specPattern: 'cypress/e2e-tests/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads',
});
