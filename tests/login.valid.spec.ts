import { test, expect } from '@playwright/test';

// Scenario: Valid Login Credentials
// Rationale: Verifies that users can log in with correct credentials (critical path).

test('Valid Login Credentials', async ({ page }) => {

  // Step 1: Navigate to the login page
  await page.goto('https://www.saucedemo.com/v1/');

  // Step 2: Fill in the username field
  await page.locator('[data-test="username"]').fill('standard_user');

  // Step 3: Fill in the password field
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Step 4: Click the LOGIN button
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Step 5: Assert that the user is redirected to the inventory page
  await expect(page).toHaveURL(/inventory/);

  // Step 6: Assert that the inventory list is visible, confirming successful login
  await expect(page.locator('.inventory_list')).toBeVisible();
  
});