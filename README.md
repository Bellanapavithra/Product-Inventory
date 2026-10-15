# Product Inventory & Analytics Dashboard

## Project Overview
The Product Inventory & Analytics Dashboard is a JavaScript mini project developed as part of an internship capstone assignment. It manages product information, categorizes products based on price, calculates inventory value, and generates a formatted inventory report.

## Objectives
- Add new products with their names and prices.
- Validate user input using conditional statements.
- Categorize products based on their prices.
- Calculate the total inventory value.
- Filter affordable products priced below $200.
- Generate a formatted report using JavaScript array methods.

## Technologies Used
- HTML – Webpage structure and input form.
- CSS – Styling and responsive layout.
- JavaScript – Product management, calculations, validation, and analytics.
- GitHub Pages – Website hosting and deployment.

## Features
1. **Product Management:** Add products by entering a product name and price.
2. **Input Validation:** Prevent empty product names and invalid or non-positive prices.
3. **Product Categorization:**
   - Budget: Price below $100.
   - Standard: Price from $100 to below $500.
   - Premium: Price of $500 or more.
4. **Inventory Analytics:** Calculate the total value of all products.
5. **Affordable Product Filter:** Display products priced below $200.
6. **Formatted Report:** Generate an uppercase product report using JavaScript's `map()` method.
7. **Console Output:** Display inventory details and financial analytics in the browser developer console.

## Initial Product Data
| Product | Price | Category |
|---|---:|---|
| Laptop | $800 | Premium |
| Mouse | $25 | Budget |

## Sample Output
When a Monitor priced at $150 is added, the expected results are:

- Laptop: $800 – Premium
- Mouse: $25 – Budget
- Monitor: $150 – Standard
- Total Inventory Value: $975
- Affordable Products: Mouse, Monitor

## Project Structure
```text
Product-Inventory/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run
1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser, preferably using the Live Server extension.
4. Enter a product name and price.
5. Use the filter buttons to view affordable products or the complete inventory.
6. Open the browser developer tools (`F12`) and select the Console tab to view the JavaScript output.

## Deployment
This project can be hosted using GitHub Pages.

1. Open the repository's **Settings**.
2. Select **Pages**.
3. Under Build and deployment, choose **Deploy from a branch**.
4. Select the `main` branch and the `/(root)` folder.
5. Click **Save** and wait for deployment to complete.

## Limitations
Products added during a session are stored in JavaScript memory. They are not permanently saved in a database and may disappear when the page is refreshed.

## Conclusion
This project demonstrates fundamental JavaScript concepts, including variables, arrays, objects, functions, arrow functions, conditional statements, loops, input validation, and array methods such as `forEach()`, `filter()`, `map()`, and `reduce()`.

**Project Type:** JavaScript Capstone Mini Project  
**Purpose:** Educational and internship project
