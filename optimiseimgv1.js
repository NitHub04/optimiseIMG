document.addEventListener("DOMContentLoaded", function() {
  // Replace with your own Stripe public key
  const stripePublicKey = "your_stripe_public_key";
  
  // Set up Stripe.js and Elements
  const stripe = Stripe(stripePublicKey);
  const elements = stripe.elements();
  
  // Create an instance of the card Element
  const card = elements.create("card");
  
  // Add an instance of the card Element into the `card-element` <div>
  card.mount("#card-element");
  
  // Handle form submission
  const form = document.getElementById("payment-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    stripe.createToken(card).then(function(result) {
      if (result.error) {
        // Show error message
        console.log(result.error.message);
      } else {
        // Send the token to your server
        handlePayment(result.token);
      }
    });
  });

  // Add your own logic to handle payment and add the user to your Mailchimp mailing list
  function handlePayment(token) {
    // 1. Send the token to your server and create a charge
    // 2. Add the user's email to your Mailchimp mailing list
    // 3. Send the user the Vimeo folder link
  }
});
