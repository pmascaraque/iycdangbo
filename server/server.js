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

app.post("/create-payment-intent", async (req, res) => {
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000, //placeholder amount for testing only, must be *100
    currency: "eur",
    automatic_payment_methods: {
      enabled: true
    }
  });

  piId = paymentIntent.id;
  console.log(piId);
  //client secret visible on preview??
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.put("/update-payment-intent/", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.update(piId, {
    amount: req.body.finalAmount
  });

  console.log(paymentIntent.amount);
  res.send(String(req.body.finalAmount));
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
