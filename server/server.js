const express = require("express");
const cors = require("cors");
const app = express();

const stripe = require("stripe")(
  "sk_test_51JnN3zHnwRpJy9ynJMJUpGBoT8fiyAQQFR3qKPos6NwAWZrGrRDAecr0KLNRLD6LTP47GrlkdIGVZjRYOOBJ9ixO00kCzNLlVp"
);

app.use(express.static("public"));
app.use(express.json());
app.use(cors()); //FOR DEVELOPMENT ONLY
app.options("*", cors());

const priceId = '{{PRICE_ID}}';

app.post('https://localhost:3000/create-customer-portal-session', async (req, res) => {
  // Authenticate your user.
  const session = await stripe.billingPortal.sessions.create({
    customer: '{{ CUSTOMER_ID }}',
    return_url: 'https://localhost:3000/privacy',
  });

  res.redirect(session.url);
});

const session = await stripe.checkout.sessions.create({
  mode: 'subscription',
  line_items: [
    {
      price: priceId,
      // For metered billing, do not pass quantity
      quantity: 1,
    },
  ],
  // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
  // the actual Session ID is returned in the query parameter when your customer
  // is redirected to the success page.
  success_url: 'https://localhost:3000/thanks/',
  cancel_url: 'https://localhost:3000/donate',
});

app.post("/webhook", async (req, res) => {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  const webhookSecret = { 'STRIPE_WEBHOOK_SECRET':

  if (webhookSecret) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  switch (eventType) {
    case 'checkout.session.completed':
      // Payment is successful and the subscription is created.
      // You should provision the subscription and save the customer ID to your database.
      break;
    case 'invoice.paid':
      // Continue to provision the subscription as payments continue to be made.
      // Store the status in your database and check when a user accesses your service.
      // This approach helps you avoid hitting rate limits.
      break;
    case 'invoice.payment_failed':
      // The payment failed or the customer does not have a valid payment method.
      // The subscription becomes past_due. Notify your customer and send them to the
      // customer portal to update their payment information.
      break;
    default:
    // Unhandled event type
  }

  res.sendStatus(200);
});

app.post("/create-payment-intent", async (req, res) => {
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 500, //placeholder amount for testing only, must be *100
    currency: "eur",
    automatic_payment_methods: {
      enabled: true
    }
  });

  piId = paymentIntent.id;
  //client secret visible on preview??
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.put("/update-payment-intent/", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.update(piId, {
    amount: req.body.finalAmount
  });

  res.send(String(req.body.finalAmount));
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
