## Test Schedule

### Objectives

Verify that the core functionalities of [https://www.saucedemo.com/v1/](https://www.saucedemo.com/v1/) operate as expected, ensuring users can log in, browse products, manage a cart, and complete the checkout process with valid and invalid inputs.

### Logging Bugs

Any inconsistencies or bugs discovered during testing will be logged in `/tests/BUGS_FOUND.md` with reproduction steps and expected vs. actual outcomes.

### Key Legend

- ☐ Test not started
- ☑ Test passed
- ☒ Test failed

### 1. Login Functionality

- ☑ Valid login (standard_user / secret_sauce)
- ☑ Invalid login (wrong password)
- ☑ Invalid login (non-existent user)
- ☑ Locked out user login
- ☑ Empty username
- ☑ Empty password
- ☑ SQL injection-style input

### 2. Product Browsing

- ☑ Product list is visible after login
- ☒ Each product has name, price, image, and "Add to cart" button
See: [Placeholder Product Name in List Bug](./BUGS_FOUND.md#bug-placeholder-product-name-in-list)
- ☑ Product sorting: Name (A to Z)
- ☑ Product sorting: Name (Z to A)
- ☑ Product sorting: Price (low to high)
- ☑ Product sorting: Price (high to low)
- ☑ Product detail navigation (clicking product opens detail page)

### 3. Cart Functionality

- ☑ Add one item to cart
- ☑ Add multiple items to cart
- ☑ Remove item from cart
- ☑ Remove item from cart page
- ☑ Cart icon updates with correct item count
- ☑ Navigate to cart page
- ☑ Cart persists across page navigation

### 4. Checkout Process

- ☑ Proceed to checkout from cart
- ☑ Form validation: empty first name
- ☑ Form validation: empty last name
- ☑ Form validation: empty postal code
- ☑ Complete checkout with valid details
- ☑ Verify item total and tax
- ☑ Finish order and see confirmation message

### 5. Logout & Session Handling

- ☑ Log out from burger menu
- ☑ Verify user is returned to login page
- ☒ Session cleared on logout (cannot use browser back button)
See: [Session Not Fully Cleared on Logout](./BUGS_FOUND.md#session-not-fully-cleared-on-logout)

### 6. Automated Test Case Coverage

- ☑ **[login.valid.spec.js](./login.valid.spec.js)**: Login succeeds with valid credentials
- ☑ **[login.invalid.spec.js](./login.invalid.spec.js)**: Login fails with invalid credentials
- ☑ **[cart.spec.js](./cart.spec.js)**: Add and remove an item from cart
- ☑ **[checkout.js](./checkout.js)**: Complete checkout with valid data
- ☑ **[sorting.spec.js](./sorting.spec.js)**: Product sorting by name
