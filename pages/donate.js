import React, { useRef } from "react";
import Layout from "../components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";

const express = require("express");
const app = express();
const stripePromise = loadStripe(
  "pk_test_51JnN3zHnwRpJy9ynon9s3tID7EGhAlZzukRevAvodhXUbQTokppHJEUCOllMdzFw1o8c3044fDzUBmmlVb1tQPcb00VJ0tig1T"
);

app.get("/secret", async (req, res) => {
  const intent = res.json({ client_secret: intent.client_secret }); // ... Fetch or create the PaymentIntent
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});

(async () => {
  const response = await fetch("/secret");
  const { client_secret: clientSecret } = await response.json();
  // Render the Payment Element using the clientSecret
})();

function Donate() {
  const AmountRef = useRef();
  return (
    <Layout>
      <div>
        <Elements stripe={stripePromise} options={options}>
          <div className="bg-white my-4 shadow p-8 rounded-lg">
            <h2 className="text-lg">Your Payment Information</h2>

            <div className="w-full">
              <label className="block text-sm mb-2">Credit Card</label>
              <div className="flex">
                <input
                  type="text"
                  id="payment"
                  class="w-1/6 flex-1 text-sm bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  id="payment"
                  class="w-1/6 inline-block text-sm bg-grey-light text-grey-darkest p-3 focus:outline-none"
                  placeholder="email"
                />
                <input
                  type="text"
                  id="payment"
                  class="w-1/6 inline-block text-sm bg-grey-light text-grey-darkest rounded-r p-3 focus:outline-none"
                  placeholder="Address"
                />
                <input
                  type="text"
                  id="payment"
                  class="w-1/6 flex-1 text-sm bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none"
                  placeholder="City"
                />
                <input
                  type="text"
                  id="payment"
                  class="w-1/6 inline-block text-sm bg-grey-light text-grey-darkest p-3 focus:outline-none"
                  placeholder="State"
                />
                <input
                  type="text"
                  id="payment"
                  class="w-1/6 inline-block text-sm bg-grey-light text-grey-darkest rounded-r p-3 focus:outline-none"
                  placeholder="ZIP Code"
                />
              </div>
              <div className="flex">
                <input
                  type="text"
                  id="payment"
                  class="w-1/5 text-sm bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none"
                  placeholder="Amount"
                  ref={AmountRef}
                />
                <input
                  type="text"
                  id="payment"
                  class="w-2/5 flex-1 text-sm bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none"
                  placeholder="Card Number"
                />
                <input
                  type="text"
                  id="payment"
                  class="w-1/5 inline-block text-sm bg-grey-light text-grey-darkest p-3 focus:outline-none"
                  placeholder="MM / YY"
                />
                <input
                  type="text"
                  id="payment"
                  class="w-1/5 inline-block text-sm bg-grey-light text-grey-darkest rounded-r p-3 focus:outline-none"
                  placeholder="CVC"
                />
              </div>
            </div>
            <form action="/create-checkout-session" method="POST">
              <button
                type="submit"
                onClick={() => {
                  console.log(AmountRef.current.value * 100);
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </Elements>
      </div>
    </Layout>
  );
}

export default Donate;
