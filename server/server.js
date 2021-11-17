const express = require("express");
const app = express();

const stripe = require("stripe")(
  "sk_test_51JnN3zHnwRpJy9ynJMJUpGBoT8fiyAQQFR3qKPos6NwAWZrGrRDAecr0KLNRLD6LTP47GrlkdIGVZjRYOOBJ9ixO00kCzNLlVp"
);

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: "eur",
  payment_method_types: ["card"]
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});

app.post("/", (req, res) => {
  console.log("post sent");
  res.send("sending post");
});
