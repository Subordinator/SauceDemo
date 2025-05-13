## Test Plan

### 1. Introduction

This test plan describes the functional testing strategy for the Swag Labs demo application ([https://www.saucedemo.com/v1/](https://www.saucedemo.com/v1/)) to ensure core features work as intended and deliver a positive user experience.

### 2. Scope & Objectives

* **Login/Logout**: Verify successful and unsuccessful authentication flows.
* **Product Browsing & Sorting**: Confirm item listings, filtering, and sort operations.
* **Cart Operations**: Test adding/removing items and cart summary.
* **Checkout Process**: Validate checkout with complete and incomplete data.
* **Error Handling**: Ensure meaningful feedback on invalid actions.

### 3. Functional Test Types

* **Input Validation**: Empty fields, invalid credentials, special characters.
* **Boundary Testing**: Maximum/minimum field lengths; edge-case values.
* **User Flows**: Standard purchase flow and variations (e.g. checkout without items).
* **Negative Tests**: Locked-out user, wrong passwords, network interruptions.
* **UI Verification**: Presence of key elements on each page and navigation links.

### 4. Rationale

* **Critical Paths First**: Login and checkout drive the core e-commerce experience.
* **Early Defect Detection**: Input and boundary tests prevent obvious errors.
* **User Experience**: Error messages and UI elements must be clear and consistent.
* **Risk-Based Focus**: Prioritize flows most likely to impact end users and revenue.

### 5. Automation Approach

* **Framework**: Playwright with TypeScript (fast, reliable, built‑in parallelism).
* **Test Runner**: Playwright Test for fixtures, retries, and reporting.
* **Assertions**: Built‑in expect API for concise checks.
* **CI Integration**: GitHub Actions pipeline for headless execution on each PR.

### 6. Mapping of Automated Tests

| Test Case           | Scenario                                  | Automation Priority |
| ------------------- | ----------------------------------------- | ------------------- |
| Valid Login         | Standard user logs in successfully        | High                |
| Invalid Login       | Locked-out or wrong credentials           | High                |
| Add & Remove Item   | Cart behavior for a single product        | Medium              |
| Complete Checkout   | Full purchase flow with valid information | High                |
| Checkout Validation | Attempt checkout with missing form fields | Medium              |

### 7. Metrics & Reporting

* **Pass/Fail Rate**: Monitored per build in GitHub Actions.
* **Test Coverage**: Percentage of core flows automated.
* **Defect Density**: Bugs found vs. tests executed.
* **Execution Time**: Kept under 5 minutes for fast feedback.