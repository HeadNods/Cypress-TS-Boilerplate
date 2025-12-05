import BasePage from '../BasePage';

/**
 * Example Page Object
 * 
 * This demonstrates the Page Object Model pattern.
 * Page objects encapsulate element locators and interactions for a specific page.
 * 
 * Benefits:
 * - Centralized element selectors
 * - Reusable page interactions
 * - Easier test maintenance
 * - Better code organization
 * 
 * Best Practice: Define selectors as private properties at the top,
 * then create getter methods. This makes it easy to update selectors
 * in one place when the UI changes.
 */
class ExamplePage extends BasePage {
  // ==================== Selectors ====================
  // Define all element selectors as private properties
  // This centralizes selector maintenance in one place
  
  private readonly selectors = {
    heading: 'h1',
    paragraph: 'p',
    learnMoreLink: 'a', // Will be combined with text search
  };

  // ==================== Constructor ====================
  
  constructor() {
    super();
    this.url = 'https://example.com';
  }

  // ==================== Element Locators ====================
  // Define methods to locate elements on the page using the selectors above
  // This keeps your tests clean and makes updates easier

  /**
   * Get the main heading element
   */
  getHeading() {
    return this.getElement(this.selectors.heading);
  }

  /**
   * Get the main paragraph
   */
  getParagraph() {
    return this.getElement(this.selectors.paragraph).first();
  }

  /**
   * Get all paragraphs on the page
   */
  getAllParagraphs() {
    return this.getElement(this.selectors.paragraph);
  }

  /**
   * Get the "Learn more" link
   */
  getLearnMoreLink() {
    return this.getByText('Learn more', this.selectors.learnMoreLink);
  }

  // ==================== Page Actions ====================
  // Define methods that perform actions on the page

  /**
   * Click the "Learn more" link
   */
  clickLearnMoreLink() {
    this.getLearnMoreLink().click();
    return this;
  }

  /**
   * Verify page is loaded correctly
   * Preferred to keep assertions within tests, but can be useful for common checks
   */
  verifyPageLoaded() {
    this.getHeading().should('be.visible');
    this.getHeading().should('contain.text', 'Example Domain');
    return this;
  }

  // ==================== Custom Page Methods ====================
  // Add your own custom methods specific to this page
  
  /**
   * Example method showing how to combine multiple actions
   */
  performCompleteFlow() {
    this.visit();
    this.verifyPageLoaded();
    this.clickLearnMoreLink();
    return this;
  }
}

export default ExamplePage;
