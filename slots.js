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
  