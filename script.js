const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	document.getElementById('calculateTotal').addEventListener('click', function() {
    // Select all price elements
    const priceElements = document.querySelectorAll('.prices');
    let totalPrice = 0;

    // Loop through the price elements and sum their values
    priceElements.forEach(function(priceElement) {
        totalPrice += parseFloat(priceElement.textContent);
    });

    // Create a new row for the total price
    const table = document.getElementById('groceryTable');
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    newCell.colSpan = 1; // Span across one column
    newCell.textContent = 'Total Price: $' + totalPrice.toFixed(2); // Format to 2 decimal places

    // Append the new cell to the new row
    newRow.appendChild(newCell);
    
    // Append the new row to the table
    table.appendChild(newRow);
});

  
};

getSumBtn.addEventListener("click", getSum);

