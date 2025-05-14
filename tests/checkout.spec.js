import { test, expect } from '@playwright/test';

// Scenario: Complete Checkout with Valid Data
// Rationale: Ensures users can complete a purchase (critical business flow).
test('Valid Checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Add item to cart
  await page.locator('.inventory_item button').first().click();
  await page.locator('.shopping_cart_link').click();

  // Ensure cart page is loaded and checkout button is visible
  await expect(page).toHaveURL(/cart/);
  await expect(page.getByRole('link', { name: 'CHECKOUT' })).toBeVisible()

  // Proceed to checkout
  await page.getByRole('link', { name: 'CHECKOUT' }).click();

  // Fill in checkout information
  await expect(page).toHaveURL(/checkout-step-one/);
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.getByRole('button', { name: 'CONTINUE' }).click();

  // Finish checkout
  await expect(page).toHaveURL(/checkout-step-two/);
  await page.getByRole('link', { name: 'FINISH' }).click();
  await expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
});