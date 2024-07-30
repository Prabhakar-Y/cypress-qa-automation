# cypress-qa-automation
## Cypress Automation with TypeScript

This repository is set up for Cypress testing using TypeScript with the [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app). 

This setup follows a **Page Object Model design pattern** for better maintainability and scalability of tests.

## Getting Started
### Prerequisites
- Node.js (>= v18.16.0)
- npm (>= 9.5.1)
- Cypress (>= 13.x)
  - Cypress package version: 13.13.1
  - Cypress binary version: 13.13.1
  - Electron version: 27.3.10
  - Bundled Node version: 18.17.1
- Typescript (>=v5.5.3)

### Reporting plugin
- @mmisty/cypress-allure-adapter
- Refer https://www.npmjs.com/package/@mmisty/cypress-allure-adapter
 
### Installation
1. **Clone the repository:**
   ```bash
   git clone [repo](https://github.com/Prabhakar-Y/cypress-qa-automation.git)
   cd cypress-qa-automation
2. Install all the necessary dependencies:

### Running the Test Application
- The [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app) application will be accessible at http://localhost:3000

### Project Structure
- cypress/: Contains all Cypress-related files.
- e2e/test: Contains test files that use Page Object Model classes for tests.
  - pages/: Contains Page Object files where page interactions and assertions are defined.
  - pages/locators/:  Contains locator files with selectors for different page elements.
- fixtures/: Test data files such as users.json for logging
- support/: Contains Custom commands defined inside the support folder 


> **Note:** Automation WIP .



