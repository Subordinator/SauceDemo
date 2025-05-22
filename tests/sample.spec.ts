import { test, expect } from '@playwright/test';

// Trace enabled for demonstration purposes.
test.use({ trace: 'on' });

// Run this test with the command:
// npx playwright test tests/sample.spec.ts --trace on
// npx playwright test tests/sample.spec.ts --project="Webkit Engine"

// Scenario: Add and Remove Item from Cart (Sample Automated Test Case)
// This scenario covers a realistic user journey and validates both positive and negative flows.
test('Add and Remove from Cart then Validate Emptiness', async ({ page }) => {

  // Step 1: Navigate to the login page
  await page.goto('https://www.saucedemo.com/v1/');

  // Step 2: Fill in the username field
  await page.locator('[data-test="username"]').fill('standard_user');

  // Step 3: Fill in the password field
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Step 4: Click the login button
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Step 5: Wait for the inventory list to appear (robust against navigation issues)
  await page.waitForSelector('.inventory_list');

  // Step 6: Add the first item to the cart
  await page.locator('.inventory_item button').first().click();

  // Step 7: Assert that the cart badge shows 1 item
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Step 8: Navigate to the cart
  await page.locator('.shopping_cart_link').click();

  // Step 9: Wait for the cart page to load
  await page.waitForSelector('.cart_item');

  // Step 10: Remove the item from the cart
  await page.locator('.cart_item .cart_button').click();

  // Step 11: Assert that the cart is empty
  await expect(page.locator('.cart_item')).toHaveCount(0);

});