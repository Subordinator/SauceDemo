import { test, expect } from '@playwright/test';

// Scenario: Complete Checkout with Valid Data
// Rationale: Ensures users can complete a purchase (critical business flow).

test('Valid Checkout', async ({ page }) => {

  // Step 1: Navigate to the login page
  await page.goto('https://www.saucedemo.com/v1/');

  // Step 2: Log in with valid credentials
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Step 3: Add the first item to the cart
  await page.locator('.inventory_item button').first().click();

  // Step 4: Go to the cart page
  await page.locator('.shopping_cart_link').click();

  // Step 5: Assert that the cart page is loaded and checkout button is visible
  await expect(page).toHaveURL(/cart/);
  await expect(page.getByRole('link', { name: 'CHECKOUT' })).toBeVisible();

  // Step 6: Proceed to checkout
  await page.getByRole('link', { name: 'CHECKOUT' }).click();

  // Step 7: Fill in checkout information
  await expect(page).toHaveURL(/checkout-step-one/);
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.getByRole('button', { name: 'CONTINUE' }).click();

  // Step 8: Finish checkout
  await expect(page).toHaveURL(/checkout-step-two/);
  await page.getByRole('link', { name: 'FINISH' }).click();

  // Step 9: Assert that the order completion message is visible
  await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');

});