import { test, expect } from '@playwright/test';

// Scenario: Product Sorting (Name A to Z and Z to A)
// Rationale: Ensures users can sort products, which is key for product discovery.
test('Product Name Sorting', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page).toHaveURL(/inventory/);

  // Sort by Name (A to Z)
  await page.locator('.product_sort_container').selectOption('az');
  const namesAZ = await page.locator('.inventory_item_name').allTextContents();
  const sortedAZ = [...namesAZ].sort();
  expect(namesAZ).toEqual(sortedAZ);

  // Sort by Name (Z to A)
  await page.locator('.product_sort_container').selectOption('za');
  const namesZA = await page.locator('.inventory_item_name').allTextContents();
  const sortedZA = [...namesZA].sort().reverse();
  expect(namesZA).toEqual(sortedZA);
});