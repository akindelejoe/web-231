
// Function to calculate total charges
function calculateTotal(basePrice, handlingFee, taxRate) {
    let total = basePrice + handlingFee + (basePrice * taxRate);
    return total;
}

// Event listener for the Calculate button
document.getElementById('calculateButton').addEventListener('click', function () {
    let basePrice = parseFloat(document.getElementById('basePrice').value);
    let handlingFee = parseFloat(document.getElementById('handlingFee').value);
    let taxRate = parseFloat(document.getElementById('taxRate').value) / 100;

    // Validate inputs
    if (isNaN(basePrice) || isNaN(handlingFee) || isNaN(taxRate)) {
        document.getElementById('totalDisplay').textContent = "Please enter valid numbers!";
        return;
    }

    // Calculate total
    let total = calculateTotal(basePrice, handlingFee, taxRate);

    // Display total
    document.getElementById('totalDisplay').textContent = `Total Charges: $${total.toFixed(2)}`;
});
