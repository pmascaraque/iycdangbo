const express = require("express");
const cors = require("cors");
const app = express();

const stripe = require("stripe")(
  "sk_test_51JnN3zHnwRpJy9ynJMJUpGBoT8fiyAQQFR3qKPos6NwAWZrGrRDAecr0KLNRLD6LTP47GrlkdIGVZjRYOOBJ9ixO00kCzNLlVp"
);

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.options("*", cors());

app.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 500,
    currency: "eur",
    automatic_payment_methods: {
      enabled: true
    }
  });

  piId = paymentIntent.id;
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
