import { test, expect } from '@playwright/test';

// Scenario: Product Sorting (Name A to Z and Z to A)
// Rationale: Ensures users can sort products, which is key for product discovery.

test('Product Name Sorting', async ({ page }) => {

  // Step 1: Navigate to the login page
  await page.goto('https://www.saucedemo.com/v1/');

  // Step 2: Log in with valid credentials
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();

  // Step 3: Verify successful login by checking the URL
  await expect(page).toHaveURL(/inventory/);

  // Step 4: Sort products by Name (A to Z)
  await page.locator('.product_sort_container').selectOption('az');
  const namesAZ = await page.locator('.inventory_item_name').allTextContents();
  const sortedAZ = [...namesAZ].sort();
  
  // Step 5: Assert that the products are sorted in ascending order
  expect(namesAZ).toEqual(sortedAZ);

  // Step 6: Sort products by Name (Z to A)
  await page.locator('.product_sort_container').selectOption('za');
  const namesZA = await page.locator('.inventory_item_name').allTextContents();
  const sortedZA = [...namesZA].sort().reverse();

  // Step 7: Assert that the products are sorted in descending order
  expect(namesZA).toEqual(sortedZA);

});