## SauceDemo Functional Test Automation

This project demonstrates a functional test automation approach for [Sauce Labs Swag Labs](https://www.saucedemo.com/v1/) as part of a Senior Test Engineer assessment.

### Project Overview

- **Goal:** Validate core user flows and critical functionality of the Swag Labs demo site.
- **Approach:** Manual exploration, structured test planning, and automated test execution using Playwright with TypeScript.


### Table of Contents

- [Test Plan](#test-plan)
- [Test Automation](#test-automation)
- [How to Run](#how-to-run)
- [Bugs & Issues](#bugs--issues)
- [Rationale & Tools](#rationale--tools)

### Test Plan

See [`tests/TEST_PLAN.md`](tests/TEST_PLAN.md) for:
- Types of functional tests prioritized (input validation, boundary, user flows)
- Rationale for test selection
- Automation strategy

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
- Steps to reproduce
- Expected vs. actual results
- Impact on testing

### Rationale & Tools

- **Playwright:** Chosen for its speed, reliability, and cross-browser support.
- **TypeScript:** Ensures type safety and maintainability.
- **Manual Exploration:** Used to identify key flows and potential edge cases.