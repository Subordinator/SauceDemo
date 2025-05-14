### WebKit Engine Error

- **System:** Microsoft Windows 10 Enterprise 2016 LTSB (x64). nodejs v22.15.0. npm v11.3.0. playwright v1.52.0.
- **Steps to Reproduce:** Run any automated test using the 'Webkit Engine' project.
- **Expected Result:** The test should open the page and proceed.
- **Actual Result:** Fails with `Error: browserContext.newPage: Target page, context or browser has been closed`.
- **Impact:** All tests fail on WebKit.
- **Workaround:** Tests are skipped for WebKit until this is resolved. Testing in Hyper-V, Macintosh is viable.

### Placeholder Product Name in List Bug

**Description:**  
Product list is visible after login shows "Test.allTheThings() T-Shirt (Red)".

**Steps to Reproduce:**
1. Go to https://www.saucedemo.com/v1/
2. Log in with valid credentials (e.g., standard_user / secret_sauce)
3. Observe the product list on the inventory page

**Expected Result:**
- Product list should display a standard set of products with clear, user-friendly names.

**Actual Result:**
- One of the products is named `Test.allTheThings() T-Shirt (Red)`, which appears to be a test or placeholder name.

**Impact:**
- This may confuse users or indicate test data is present in production.

**Recommendation:**
- Review product data for placeholder/test names and update to production-ready values.

### Placeholder Product Description Bug

**Description:**  
On the product detail page for `id=4`, the description reads:  
`carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.`

**Steps to Reproduce:**
1. Go to https://www.saucedemo.com/v1/inventory-item.html?id=4
2. Observe the product description.

**Expected Result:**
- Product description should use finalised, user-friendly marketing text.

**Actual Result:**
- Description contains `carry.allTheThings()`, which appears to be a placeholder or test phrase.

**Impact:**
- May confuse users or indicate test data is present in production.

**Recommendation:**
- Update product descriptions to remove placeholder/test phrases and use finalized content.

### Back Button Hover Cursor Missing Bug

**Description:**  
On a product detail page, the "Back" button does not change the cursor to a pointer (hand) on hover.

**Steps to Reproduce:**
1. Go to any product detail page, e.g., https://www.saucedemo.com/v1/inventory-item.html?id=1
2. Hover the mouse over the "Back" button (top left).

**Expected Result:**
- Cursor should change to a pointer (hand) when hovering over the "Back" button, indicating it is clickable.

**Actual Result:**
- Cursor remains as the default arrow; no visual feedback that the button is clickable.

**Impact:**
- Reduces usability and may confuse users about the button's interactivity.

**Recommendation:**
- Update the button's CSS to use `cursor: pointer` on hover.

### Session Not Fully Cleared on Logout

**Description:**  
After logging out, using the browser's back button allows the user to access the inventory page without re-authenticating.

**Steps to Reproduce:**
1. Log in with valid credentials at https://www.saucedemo.com/v1/
2. Log out using the burger menu.
3. Click the browser's back button.

**Expected Result:**
- User should remain logged out and be redirected to the login page. Inventory and other authenticated pages should not be accessible.

**Actual Result:**
- User can view the inventory page and browse products after logout by navigating back in browser history.

**Impact:**
- Session is not fully cleared, which is a security risk and may allow unauthorized access to protected pages.

**Recommendation:**
- Ensure session and authentication state are fully cleared on logout. Prevent access to authenticated pages via browser history after logout.