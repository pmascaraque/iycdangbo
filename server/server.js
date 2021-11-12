const express = require("express");
const app = express();

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_KEY);

app.use(express.static(""));
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: "100", //calculate amount on server to prevent client side manipulation
    currency: "eur",
    payment_method_types: ["card"]
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.listen(8000, () => console.log("Node server listening on port 8000!"));
