## SauceDemo Functional Test Automation

This project demonstrates a functional test automation approach for [Sauce Labs Swag Labs](https://www.saucedemo.com/v1/) as part of a Senior Test Engineer assessment.

### Project Overview

- **Goal:** Validate core user flows and critical functionality of the Swag Labs demo site.
- **Approach:** Manual exploration, structured test planning, and automated test execution using Playwright with TypeScript.

### Table of Contents

- [Test Plan](#test-plan)
- [Test Automation](#test-automation)
- [Dependencies](#dependencies)
- [How to Run](#how-to-run)
- [Bugs & Issues](#bugs--issues)
- [Rationale & Tools](#rationale--tools)

### Test Plan

See [`tests/TEST_PLAN.md`](tests/TEST_PLAN.md) for:
- Types of functional tests prioritized (input validation, boundary, user flows).
- Rationale for test selection.
- Automation strategy.

See [`tests/TEST_SCHEDULE.md`](tests/TEST_SCHEDULE.md) for:
- Test execution schedule of manual and automated test runs.

### Test Automation

Automated tests are implemented using [Playwright](https://playwright.dev/) with TypeScript.  

Key scenarios automated:
1. **Valid login** – Ensures users can log in with correct credentials.
2. **Invalid login** – Verifies error handling for incorrect credentials.
3. **Product list visibility** – Confirms products are displayed after login.
4. **Add to cart** – Checks cart functionality.
5. **Checkout flow** – Validates completing a purchase.

Each test case is documented with its scenario and rationale in code comments.

### Bugs & Issues

See [`tests/BUGS_FOUND.md`](tests/BUGS_FOUND.md) for:
- Steps to reproduce.
- Expected vs. actual results.
- Impact on testing.

### Rationale & Tools

- **Playwright:** Chosen for its speed, reliability, and cross-browser support.
- **TypeScript:** Ensures type safety and maintainability.
- **Manual Exploration:** Used to identify key flows and potential edge cases.

### Dependencies

The following dependencies are required to run the automated tests:

| Package            | Version      | Purpose                                 |
|--------------------|-------------|-----------------------------------------|
| Node.js            | 22.15.0     | JavaScript runtime                      |
| npm                | 11.3.0      | Node package manager                    |
| @playwright/test   | 1.52.0     | Playwright test runner and API          |
| playwright         | 1.52.0     | Browser automation                      |
| @types/node        | 22.15.17   | TypeScript type definitions for Node.js |

### How to Run

**Preparation:**  
Ensure that the Node Package Manager `npm` command is available in your command prompt. If you see an error like `'npm' is not recognized as an internal or external command`, you may need to install and add Node.js to your system PATH environment variable.

Windows OS Instructions:
- Node.js can be installed from `https://nodejs.org/en/download`.
- Press `Win + R`, type `SystemPropertiesAdvanced`, and press Enter.
- In the System Properties window, click the `Environment Variables...` button.
- Edit the `PATH` variable in your user or system environment variables.
- Add the path to `npm` installation (e.g., `%UserProfile%\AppData\Roaming\npm`).
- Open a new command prompt and run `npm -v` to verify it is recognised.
- Then, set the working directory as the repository (e.g, `cd %UserProfile%\SauceDemo`).

**1. Run a specific test file:**
```
npx playwright test tests/login.valid.spec.js
```

*Runs only the specified test file. As defined in `playwright.config.ts` this will generate a human-readable report `playwright-report\index.html` and a machine-readable report `playwright-report\report.json` useful for analytics and advanced reporting beyond the default HTML report.*

**2. Run all automated tests:**
```
npm test
```
*Runs the full Playwright test suite, across all browsers and devices outlined in the `playwright.config.ts >> projects`. Command defined in `package.json >> scripts >> test` help to remove previous trace and report files before running new tests, ensuring that only the latest results and traces are present for review.*

**3. View the Playwright HTML report:**
```
npx playwright show-report
```
*Opens an interactive HTML report of the latest test run in your browser.*

**4. Use Playwright Codegen (for exploratory/manual script creation):**
```
npx playwright codegen https://www.saucedemo.com/v1/
```
*Launches Playwright's interactive code generator, to record user actions on the site and generate test scripts automatically. Useful for quickly prototyping or exploring flows before formalising automated tests.*

**Outcome:**  
- All core user flows are tested automatically.
- Test results and coverage are visible in the Playwright HTML report.
- For a record of test execution and scheduling, see [`/tests/TEST_SCHEDULE.md`](tests/TEST_SCHEDULE.md).
- Any failures or bugs are logged and can be reviewed in `/tests/BUGS_FOUND.md`.