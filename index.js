// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create a category header
        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = category;
        menuContainer.appendChild(categoryHeader);

        // Create a list to contain the items
        const itemList = document.createElement('ul');

        // Loop through each item in the category
        menu[category].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;

            // Attach a click event listener to the list item
            listItem.addEventListener('click', () => addToOrder(item));

            itemList.appendChild(listItem);
        });

        menuContainer.appendChild(itemList);
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Add the item to the order list
    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;
    orderItemsList.appendChild(orderItem);

    // Update the total price
    const prices = {
        "Garlic Bread": 20.00,
        "Bruschetta": 25.00,
        "Margherita Pizza": 50.00,
        "Spaghetti Carbonara": 60.00,
        "Tiramisu": 30.00,
        "Cheesecake": 35.00
    };

    // Get the current total, add the price of the clicked item
    let currentTotal = parseFloat(orderTotalElement.textContent);
    currentTotal += prices[itemName];
    orderTotalElement.textContent = currentTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
