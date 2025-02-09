// Function to calculate the total cost
function calculateTotal() {
    // Get the values of price and quantity from the form
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    // Check if the inputs are valid numbers
    if (isNaN(price) || isNaN(quantity)) {
        document.getElementById('output').textContent = "Please enter valid numbers for price and quantity.";
        return;
    }

    // Calculate the total cost
    const totalCost = price * quantity;

    // Display the result
    document.getElementById('output').textContent = `The total cost is: $${totalCost.toFixed(2)}`;
}

// Add an event listener to the button
document.getElementById('calculateButton').addEventListener('click', calculateTotal);
