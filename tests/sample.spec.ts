import { test, expect } from '@playwright/test';

// Trace enabled for demonstration purposes.
test.use({ trace: 'on' });

// Scenario: Add and Remove Item from Cart (Sample Automated Test Case)
// This scenario covers a realistic user journey and validates both positive and negative flows.
test('User can add and remove item from cart, then cart is empty', async ({ page }) => {

  // 1. Login as a user
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page).toHaveURL(/inventory/);

  // 2. Add an item to the cart
  await page.locator('.inventory_item button').first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // 3. Navigate to the cart
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL(/cart/);

  // 4. Remove the item
  await page.locator('.cart_item .cart_button').click();

  // 5. Assert that the cart is empty
  await expect(page.locator('.cart_item')).toHaveCount(0);

});