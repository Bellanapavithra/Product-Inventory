
"use strict";

// 1. Initialize inventory
let products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

let showAffordable = false;

// 2. Function to assign product category
function getCategory(price) {
    switch (true) {
        case price < 100:
            return "Budget";
        case price < 500:
            return "Standard";
        default:
            return "Premium";
    }
}

// 3. Arrow function with default discount parameter
const applyDiscount = (price, discount = 0) =>
    price - (price * discount / 100);

// 4. Display products on the webpage using forEach()
function displayProducts(list) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    list.forEach(function(product) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = "$" + product.price.toFixed(2);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = getCategory(product.price);

        row.append(nameCell, priceCell, categoryCell);
        productList.appendChild(row);
    });
}

// 5. Display affordable products
function displayAffordableProducts() {
    const affordable = products.filter(
        product => product.price < 200
    );

    const affordableList = document.getElementById("affordableList");
    affordableList.innerHTML = "";

    affordable.forEach(product => {
        const item = document.createElement("li");
        item.textContent =
            product.name + " ($" + product.price.toFixed(2) + ")";
        affordableList.appendChild(item);
    });

    return affordable;
}

// 6. Display report and financial analytics
function updateAnalytics() {
    // Calculate total inventory value
    const total = products.reduce(
        (sum, product) => sum + product.price,
        0
    );

    document.getElementById("total").textContent =
        "Total Inventory Value: $" + total.toFixed(2);

    // Filter affordable products
    const affordable = displayAffordableProducts();

    // Create formatted report using map()
    const report = products.map(
        product =>
            product.name.toUpperCase() +
            ": $" + product.price
    );

    document.getElementById("report").textContent =
        JSON.stringify(report, null, 2);

    // Display all or filtered products
    if (showAffordable) {
        displayProducts(affordable);
    } else {
        displayProducts(products);
    }

    // 7. Print current results in browser Console
    console.clear();

    console.log("--- Initializing Inventory System ---");

    console.log("\n--- Processing Inventory Roster (forEach) ---");

    products.forEach(function(product) {
        console.log(
            "* Item: " + product.name +
            " ($" + product.price + ")" +
            " -> Category: " + getCategory(product.price)
        );
    });

    console.log("\n--- Financial Analytics ---");
    console.log("Total Inventory Value: $" + total);

    console.log(
        "Filtered Affordable Items (Under $200):",
        affordable.map(product => product.name)
    );

    console.log("Formatted Report List:", report);
}

// 8. Add a new product and validate input
document.getElementById("productForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const priceInput = document.getElementById("price").value;
        const price = Number(priceInput);
        const message = document.getElementById("message");

        if (
            name === "" ||
            priceInput.trim() === "" ||
            !Number.isFinite(price) ||
            price <= 0
        ) {
            message.textContent =
                "Please enter a valid name and positive price.";
            message.style.color = "red";
            return;
        }

        products.push({ name: name, price: price });

        message.textContent = "Product added successfully!";
        message.style.color = "green";

        document.getElementById("productForm").reset();

        showAffordable = false;
        updateAnalytics();
    }
);

// 9. Show products under $200
document.getElementById("filterBtn").addEventListener(
    "click",
    function() {
        showAffordable = true;
        updateAnalytics();
    }
);

// 10. Show all products
document.getElementById("showAllBtn").addEventListener(
    "click",
    function() {
        showAffordable = false;
        updateAnalytics();
    }
);

// 11. Initial display
updateAnalytics();
