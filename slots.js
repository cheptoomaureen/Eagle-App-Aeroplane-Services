// slots.js

// Function to fetch order details
function fetchOrderDetails(orderId) {
   fetch(`http://localhost:3000/orders/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(order => {
        // Assuming the order details are returned in a specific format
        const orderDetailsContent = `
          <p>Order ID: ${"001"}</p>
          <p>Passenger Name: ${"Kate Middleton"}</p>
          <p>Service/Food: ${"Gourmet Meal"}</p>
          <p>Status: ${"Pending"}</p>
        `;
        document.getElementById('order-details-content').innerHTML = orderDetailsContent;
        showOrderDetailsModal();
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  
  // Function to show the order details modal
  function showOrderDetailsModal() {
   const modal = document.getElementById('order-details-modal');
   modal.style.display = 'block';
  }
  
  // Function to close the order details modal
  function closeOrderDetailsModal() {
   const modal = document.getElementById('order-details-modal');
   modal.style.display = 'none';
  }
  
  // Add event listeners to the "View" buttons
  document.querySelectorAll('.view-order-button').forEach(button => {
   button.addEventListener('click', () => {
      const orderId = button.getAttribute('data-id');
      fetchOrderDetails(orderId);
   });
  });
  
  // Add event listener to the close button of the modal
  document.getElementById('close-modal-button').addEventListener('click', closeOrderDetailsModal);
  

  // Function to add items to the cart
  function addToCart(itemName, itemPrice, quantity) {
    var newItem = {
      name: itemName,
      price: itemPrice,
      qty: quantity
    };

    // Add the new item to the cart
    var cartTable = document.querySelector('#checkout-cart tbody');
    var newRow = cartTable.insertRow();
    var nameCell = newRow.insertCell(0);
    var qtyCell = newRow.insertCell(1);
    var priceCell = newRow.insertCell(2);

    nameCell.textContent = newItem.name;
    qtyCell.textContent = newItem.qty;
    priceCell.textContent = newItem.price;

    // Update total
    updateTotal();
  }

  // Function to update cart total
  function updateTotal() {
    var total = 0;
    var priceCells = document.querySelectorAll('#checkout-cart tbody tr td:nth-child(3)');
    priceCells.forEach(function(cell) {
      total += parseFloat(cell.textContent);
    });
    document.getElementById('stotal').textContent = total.toFixed(2);
  }

  // Function to update cart
  function updateCart() {
    // Add functionality to update cart
    alert("Cart updated!");
  }

  // Function to empty cart
  function emptyCart() {
    // Add functionality to empty cart
    alert("Cart emptied!");
  }

  // Function to process payment
  function processPayment() {
    // Add functionality to process payment
    alert("Processing payment...");
  }
  function updateCart() {
    
    // Add functionality to update cart
    alert("Cart updated!");
  }

  function emptyCart() {
    // Add functionality to empty cart
    alert("Cart emptied!");
  }
 
   // Function to handle PayPal button click
   function handlePayPalClick(event) {
    event.preventDefault(); // Prevent form submission

    // Call your server-side function for PayPal payment
    // For demonstration purposes, I'm just logging a message
    alert("Initiating PayPal payment...");
  }

  // Function to handle Cash button click
  function handleCashClick(event) {
    event.preventDefault(); // Prevent form submission

    // Call your server-side function for cash payment
    // For demonstration purposes, I'm just logging a message
    alert("Initiating cash payment...");
  }

  // Add event listeners to the PayPal and Cash buttons
  document.getElementById("paypal-btn").addEventListener("click", handlePayPalClick);
  document.getElementById("cash-btn").addEventListener("click", handleCashClick);
  
  