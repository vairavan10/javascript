document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simulated authentication, replace with actual authentication logic
  if (username === 'admin' && password === 'password') {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('payment-container').style.display = 'block';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});

document.getElementById('payment-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var amount = document.getElementById('amount').value;
  var cardNumber = document.getElementById('card-number').value;
  var cardExpiry = document.getElementById('card-expiry').value;
  var cardCvc = document.getElementById('card-cvc').value;

  // Validate card details before submission
  if (!validateCardDetails(amount, cardNumber, cardExpiry, cardCvc)) {
    return;
  }

  // You would typically send this data to a server for processing, 
  // but here we're just simulating a successful payment.
  simulatePayment(amount);
});

function validateCardDetails(amount, cardNumber, cardExpiry, cardCvc) {
  if (amount <= 0 || isNaN(amount)) {
    alert('Please enter a valid amount.');
    return false;
  }
  if (!/^[\d ]{16}$/.test(cardNumber)) {
    alert('Please enter a valid card number.');
    return false;
  }
  if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
    alert('Please enter a valid expiration date (MM/YY).');
    return false;
  }
  if (!/^\d{3}$/.test(cardCvc)) {
    alert('Please enter a valid CVC.');
    return false;
  }
  return true;
}

function simulatePayment(amount) {
  // Here you would make an AJAX request to your server to process the payment
  // and handle the response accordingly. For simplicity, we're just displaying a success message.
  var paymentStatus = document.getElementById('payment-status');
  paymentStatus.textContent = 'Payment of $' + amount + ' successfully processed!';
}
