import { test, expect } from '@playwright/test';

// Scenario: Invalid Login Credentials
// Rationale: Ensures error handling for incorrect authentication attempts.

test('Invalid Login Credentials', async ({ page }) => {
  
  // Step 1: Navigate to the login page
  await page.goto('https://www.saucedemo.com/v1/');

  // Step 2: Fill in the username field with a valid username
  await page.locator('[data-test="username"]').fill('standard_user');

  // Step 3: Fill in the password field with an invalid password
  await page.locator('[data-test="password"]').fill('wrong_password');

  // Step 4: Click the LOGIN button
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Step 5: Assert that an error message is displayed
  await expect(page.locator('[data-test="error"]')).toBeVisible();

  // Step 6: Assert that the user remains on the login page
  await expect(page).toHaveURL('https://www.saucedemo.com/v1/');

});