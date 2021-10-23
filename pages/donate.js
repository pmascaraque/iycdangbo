import React from "react";
import Layout from "../components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "sk_test_51JnN3zHnwRpJy9ynJMJUpGBoT8fiyAQQFR3qKPos6NwAWZrGrRDAecr0KLNRLD6LTP47GrlkdIGVZjRYOOBJ9ixO00kCzNLlVp"
); // TEST KEY

function Donate() {
  return (
    <Layout>
      <br /> <br /> <p>a</p>
      <br />
      <Elements stripe={stripePromise}></Elements>
      <div>
        <div>
          <h2 class="text-lg">Your Payment Information</h2>

          <div class="w-full">
            Credit Card
            <div>
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="MM / YY" />
              <input type="text" placeholder="CVC" />
            </div>
          </div>
        </div>
      </div>
      <form action="/create-checkout-session" method="POST">
        <button type="submit">Donate</button>
      </form>
    </Layout>
  );
}

export default Donate;
