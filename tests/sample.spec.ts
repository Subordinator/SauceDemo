import { test, expect, Page } from '@playwright/test';

// Run this test with the command:
// npx playwright test tests/sample.spec.ts --trace on
// npx playwright test tests/sample.spec.ts --project="Webkit Engine"

// Scenario: Add and Remove Item from Cart (Sample Automated Test Case)
// This scenario covers a realistic user journey and validates both positive and negative flows.

// Trace enabled for demonstration purposes.
test.use({ trace: 'on' });

// Helper function to check cart for a specific product name and count
async function expectCartHasProduct(page: Page, expectedName: string, expectedCount: number) {

  // Go to cart page
  await page.locator('.shopping_cart_link').click();

  // Wait for cart items to load (if any)
  if (expectedCount > 0) {
    await page.waitForSelector('.cart_item');
    await expect(page.locator('.cart_item')).toHaveCount(expectedCount);
    await expect(page.locator('.cart_item .inventory_item_name')).toHaveText(expectedName);
  } else {
    await expect(page.locator('.cart_item')).toHaveCount(0);
  }

}

test('Modify Cart, Refresh then Validate Cart is Empty', async ({ page }) => {

  // Step 1: Navigate to the login page
  await page.goto('https://www.saucedemo.com/v1/');

  // Step 2: Fill in the username field
  await page.locator('[data-test="username"]').fill('standard_user');

  // Step 3: Fill in the password field
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Step 4: Click the login button
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Step 5: Wait for the inventory list to appear
  await page.waitForSelector('.inventory_list');

  // Step 6: Capture the first product's name
  const firstProduct = page.locator('.inventory_item').first();
  const productName = await firstProduct.locator('.inventory_item_name').innerText();

  // Step 7: Add the first item to the cart
  await firstProduct.locator('button').click();

  // Step 8: Assert that the cart badge shows 1 item
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Step 9: Reload the page
  await page.reload();

  // Step 10: Assert that the cart badge still shows 1 item
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Step 11: Assert the same product is in the cart
  await expectCartHasProduct(page, productName, 1);

  // Step 12: Remove the item from the cart
  await page.locator('.cart_item .cart_button').click();

  // Step 13: Assert that the cart is empty
  await expectCartHasProduct(page, '', 0);
  
});