import { test, expect } from '@playwright/test';

// Scenario: Add and Remove Item from Cart
// Rationale: Validates core cart functionality for e-commerce flows.

test('Cart Item Management', async ({ page }) => {

  // Step 1: Navigate to the login page
  await page.goto('https://www.saucedemo.com/v1/');

  // Step 2: Log in with valid credentials
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Step 3: Assert successful login by checking the URL
  await expect(page).toHaveURL(/inventory/);

  // Step 4: Add the first item to the cart
  await page.locator('.inventory_item button').first().click();

  // Step 5: Assert that the cart badge shows 1 item
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Step 6: Go to the cart page
  await page.locator('.shopping_cart_link').click();

  // Step 7: Assert that the cart page is loaded
  await expect(page).toHaveURL(/cart/);

  // Step 8: Remove the item from the cart
  await page.locator('.cart_item .cart_button').click();

  // Step 9: Assert that the cart is now empty
  await expect(page.locator('.cart_item')).toHaveCount(0);
  
});