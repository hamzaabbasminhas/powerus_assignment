# powerus_assignment

This repository contains tests for UI automation solution for PowerUs assignment using Cypress. The tests follow the **Page Object Model (POM)** design pattern for better maintainability and readability. The tests cover various scenarios for interacting with different web elements and performing common tasks.

## prerequisites
- [nodejs](https://nodejs.org/en/)
- yarn
- Chrome browser

## Installation

To run the example tests locally, follow these steps:

1. Clone the repository to your local machine.
2. Install Cypress and other dependencies by running the following command:

 ```shell
npm install


## Running the Tests

To execute the test, you can use the following commands:

- Run all tests:

```shell
npm run test

- Run all tests on the chrome browser:

```shell
npm run test:Chrome

- Run all the tests in headed mode:

```shell
npm run test:headed

## Test and Page Object Files:

The repository includes the test files under the `cypress/integration/src/spec` directory and page object files under `cypress/integration/src/pageObjects`

## Configuration

The Cypress configuration files include the following:

- `cypress.config.js`:

- Contains environment variables and configuration options for the tests.
- The `url` variable specifies the base URL of the web application under test.
- Additional configuration options for Cypress.
- Sets the default command timeout, disables Chrome web security, and configures the Mochawesome reporter.


## Reporting

The Mochawesome reporter generates stylish HTML reports. After running the tests, the reports can be found in the `cypress/reports/mochawesome-report` directory. Open the HTML report in any web browser to view the detailed test results.

## Dependencies
The example tests utilize the following dependencies, listed in the package.json file:

Cypress: End-to-end testing framework.
Faker: For generating random test data.
TypeScript: Language implementation.
Mocha: JavaScript test framework used by Cypress.
Mochawesome: Reporter for generating stylish HTML reports.
Mochawesome-merge: Tool for merging multiple Mochawesome reports.




