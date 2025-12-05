# Cypress TypeScript Boilerplate

A professional, production-ready Cypress testing boilerplate using TypeScript and the Page Object Model pattern. This template provides a solid foundation for building scalable end-to-end test automation with both local and Docker-based execution options.

## Features

✅ **TypeScript Support** - Full TypeScript configuration for type safety and better IDE support  
✅ **Page Object Model** - Clean, maintainable test architecture  
✅ **Custom Commands** - Reusable Cypress commands with TypeScript definitions  
✅ **Fixtures** - Test data management with JSON fixtures  
✅ **HTML Reports** - Beautiful test reports using Mochawesome  
✅ **Docker Support** - Containerized test execution for CI/CD  
✅ **Multi-Browser** - Chrome, Firefox, Edge, and Electron support  
✅ **GitHub Actions Ready** - Pre-configured CI/CD workflow  

## Prerequisites

- **Node.js** 20.x or higher
- **npm** (comes with Node.js)
- **Docker** (optional, for containerized testing)

## Quick Start

### Installation

```bash
# Navigate to the project directory
cd cypress-ts-demo

# Install dependencies
npm install

# Open Cypress Test Runner (interactive mode)
npm run cy:open
```

### Run the Example Test

```bash
# Run tests in headless mode
npm test

# Run tests in headed mode (watch the browser)
npm run test:headed

# Run tests in a specific browser
npm run test:chrome
npm run test:firefox
npm run test:edge
```

## Project Structure

```
cypress-ts-boilerplate/
├── cypress/
│   ├── e2e-tests/
│   │   └── examples/
│   │       └── example-test.cy.ts    # Example test demonstrating best practices
│   ├── fixtures/
│   │   └── example.json              # Test data fixtures
│   ├── page-object-model/
│   │   ├── BasePage.ts               # Base page with common methods
│   │   ├── index.ts                  # Barrel export for page objects
│   │   └── pages/
│   │       └── ExamplePage.ts        # Example page object
│   ├── reports/                      # Generated test reports
│   ├── screenshots/                  # Screenshots from failed tests
│   └── support/
│       ├── commands.ts               # Custom Cypress commands
│       └── e2e.ts                    # Test configuration and setup
├── cypress.config.ts                 # Cypress configuration
├── docker-compose.yml                # Docker setup for CI/CD
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # This file
```

## Creating Your First Test

### 1. Create a Page Object

Create a new page object in `cypress/page-object-model/pages/`:

```typescript
// cypress/page-object-model/pages/LoginPage.ts
import BasePage from '../BasePage';

class LoginPage extends BasePage {
  constructor() {
    super();
    this.url = 'https://your-app.com/login';
  }

  // Element locators
  getEmailInput() {
    return this.getByCy('email-input');
  }

  getPasswordInput() {
    return this.getByCy('password-input');
  }

  getSubmitButton() {
    return this.getByCy('login-button');
  }

  // Page actions
  login(email: string, password: string) {
    this.getEmailInput().type(email);
    this.getPasswordInput().type(password);
    this.getSubmitButton().click();
    return this;
  }
}

export default LoginPage;
```

### 2. Export Your Page Object

Add your page object to `cypress/page-object-model/index.ts`:

```typescript
import LoginPage from './pages/LoginPage';

export {
  BasePage,
  ExamplePage,
  LoginPage,  // Add your new page
};
```

### 3. Write Your Test

Create a test file in `cypress/e2e-tests/`:

```typescript
// cypress/e2e-tests/login.cy.ts
import { LoginPage } from '../page-object-model';

describe('Login Tests', () => {
  let loginPage: LoginPage;

  before(() => {
    loginPage = new LoginPage();
  });

  it('should login successfully', () => {
    loginPage.visit();
    loginPage.login('user@example.com', 'password123');
    cy.url().should('include', '/dashboard');
  });
});
```

## Running Tests

### Local Execution

```bash
# Default (Electron, headless)
npm test

# Headed mode (see the browser)
npm run test:headed

# Specific browser
npm run test:chrome
npm run test:firefox
npm run test:edge

# Interactive mode (Cypress UI)
npm run cy:open
```

### Docker Execution

Docker execution uses the official `cypress/included:latest` image:

```bash
# Default (Electron)
npm run docker:compose:up

# Specific browser
npm run docker:compose:chrome
npm run docker:compose:firefox
npm run docker:compose:edge

# Clean up containers
npm run docker:compose:down

# Interactive shell (debugging)
npm run docker:interactive
```

## Custom Commands

Custom commands are defined in `cypress/support/commands.ts`. Here's an example:

```typescript
// Define the command
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login');
  cy.getByCy('email-input').type(email);
  cy.getByCy('password-input').type(password);
  cy.getByCy('login-button').click();
});

// Declare TypeScript types
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
    }
  }
}
```

Use in your tests:

```typescript
cy.login('user@example.com', 'password123');
```

## Using Fixtures

Fixtures store test data in JSON format:

```typescript
// Load fixture in your test
cy.fixture('example').then((data) => {
  cy.log(`User: ${data.name}`);
  cy.get('[data-cy="name-input"]').type(data.name);
});
```

Create new fixtures in `cypress/fixtures/`:

```json
{
  "username": "testuser",
  "email": "test@example.com"
}
```

## Test Reports

Tests generate HTML reports using Mochawesome:

- **Location**: `cypress/reports/cypress-ts-test-report.html`
- **Generated**: After each test run
- **Includes**: Test results, screenshots, and execution details

Open the report in your browser after running tests.

## GitHub Actions CI/CD

This boilerplate includes a pre-configured GitHub Actions workflow at `.github/workflows/cypress-ts-workflow.yml`.

### Features:
- ✅ Automatic execution on push/PR to main/master
- ✅ Manual trigger with browser selection
- ✅ Docker and non-Docker execution modes
- ✅ Automatic artifact upload (screenshots, videos, reports)

### Manual Trigger:
1. Go to **Actions** tab in GitHub
2. Select **Cypress E2E Tests**
3. Click **Run workflow**
4. Choose browser and Docker option

## Best Practices

### Page Objects
- Keep selectors in page objects, not in tests
- Use `data-cy` attributes for element selection (most reliable)
- Create reusable methods for common actions
- Extend `BasePage` for shared functionality

### Tests
- Use descriptive test names
- Follow AAA pattern: Arrange, Act, Assert
- Keep tests independent and isolated
- Use `beforeEach` for setup, `afterEach` for cleanup

### Custom Commands
- Create commands for frequently repeated actions
- Always add TypeScript declarations
- Document your commands with JSDoc comments

### Fixtures
- Store test data separately from test logic
- Use meaningful fixture names
- Keep fixtures simple and focused

## Configuration

### Cypress Config (`cypress.config.ts`)

Key settings you might want to modify:

```typescript
{
  baseUrl: 'https://your-app.com',  // Your application URL
  viewportWidth: 1280,               // Default viewport width
  viewportHeight: 720,               // Default viewport height
  defaultCommandTimeout: 10000,     // Command timeout
  video: true,                       // Record videos
}
```

### Environment Variables

Create a `.env` file for environment-specific values:

```env
CYPRESS_BASE_URL=https://staging.your-app.com
CYPRESS_API_URL=https://api.your-app.com
```

Use in tests:

```typescript
const baseUrl = Cypress.env('BASE_URL');
```

## Troubleshooting

### TypeScript Errors

```bash
# Clear TypeScript cache
rm -rf node_modules typescript tsconfig.tsbuildinfo
npm install
```

### Cypress Binary Issues

```bash
# Reinstall Cypress
npx cypress install --force
```

### Docker Permission Issues (Linux/Mac)

```bash
chmod -R 777 cypress/screenshots cypress/videos cypress/reports
```

## Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Page Object Model Pattern](https://martinfowler.com/bliki/PageObject.html)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)

## Next Steps

1. ✅ Review the example test in `cypress/e2e-tests/examples/`
2. ✅ Study the `ExamplePage` page object
3. ✅ Create your first page object for your application
4. ✅ Write your first test
5. ✅ Set up environment variables
6. ✅ Configure GitHub Actions for your repository

## Contributing

Feel free to extend this boilerplate with additional features, patterns, or utilities that benefit your testing needs.

## License

This is a boilerplate template for learning and project use.
