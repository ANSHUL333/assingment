document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement your login logic here
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('customerListScreen').style.display = 'block';
});

document.getElementById('addCustomerButton').addEventListener('click', function() {
    document.getElementById('addCustomerScreen').style.display = 'block';
});

document.getElementById('addCustomerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement your customer adding logic here
    var customerDetails = [
        document.getElementById('firstName').value,
        document.getElementById('lastName').value,
        document.getElementById('address').value,
        document.getElementById('city').value,
        document.getElementById('state').value,
        document.getElementById('email').value,
        document.getElementById('phone').value,
    ];

    // add new row to the table
    var table = document.getElementById('customerTable');
    var row = table.insertRow(-1);
    customerDetails.forEach(function(detail) {
        var cell = row.insertCell(-1);
        cell.textContent = detail;
    });

    // add delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    var actionCell = row.insertCell(-1);
    actionCell.appendChild(deleteButton);

    // reset the form
    document.getElementById('addCustomerForm').reset();

    // hide the add customer screen
    document.getElementById('addCustomerScreen').style.display = 'none';
});