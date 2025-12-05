/**
 * Page Objects Index
 * Central export point for all page objects
 * 
 * IMPORTANT: This file MUST be named 'index.ts'
 * The filename 'index.ts' is automatically discovered when importing from a directory.
 * Renaming this file will require all imports to point to this file specifically instead of its directory!
 * 
 * This barrel export pattern allows you to import multiple page objects from one location:
 * 
 * Example usage:
 *   import { ExamplePage } from '../../page-object-model';  // automatically finds index.ts
 *   import { ExamplePage, BasePage } from '../../page-object-model';
 * 
 * As you add more page objects, import and export them here to keep imports clean.
 */

// Import all page objects
import BasePage from './BasePage';
import ExamplePage from './pages/ExamplePage';

// Add your new page objects here as you create them
// import AnotherPage from './pages/AnotherPage';

// Export all page objects
export {
  BasePage,
  ExamplePage,
  // Add your exports here
  // AnotherPage,
};

// Default export with all page objects as properties
export default {
  BasePage,
  ExamplePage,
  // Add your default exports here
  // AnotherPage,
};