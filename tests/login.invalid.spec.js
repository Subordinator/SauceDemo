import { test, expect } from '@playwright/test';

// Scenario: Invalid Login Credentials
// Rationale: Ensures error handling for incorrect authentication attempts.
test('Invalid Login Credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_password');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page).toHaveURL('https://www.saucedemo.com/v1/');
});