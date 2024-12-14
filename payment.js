const stripe = Stripe('your-public-stripe-key'); // Use your public Stripe key

const payNowButton = document.querySelector('.pay-now-button');

payNowButton.addEventListener('click', () => {
    // Create a payment session on your backend and get a session ID
    fetch('/create-payment-session', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(session => {
        // Redirect to Stripe's hosted payment page
        return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .catch(error => console.error('Error:', error));
});
