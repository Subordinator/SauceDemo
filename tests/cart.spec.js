import { test, expect } from '@playwright/test';

// Scenario: Add and Remove Item from Cart
// Rationale: Validates core cart functionality for e-commerce flows.
test('Cart Item Management', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page).toHaveURL(/inventory/);

  // Add first item to cart
  await page.locator('.inventory_item button').first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Go to cart
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL(/cart/);

  // Remove item from cart
  await page.locator('.cart_item .cart_button').click();
  await expect(page.locator('.cart_item')).toHaveCount(0);
});