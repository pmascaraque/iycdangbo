import React from "react";
import Layout from "../components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "sk_test_51JnN3zHnwRpJy9ynJMJUpGBoT8fiyAQQFR3qKPos6NwAWZrGrRDAecr0KLNRLD6LTP47GrlkdIGVZjRYOOBJ9ixO00kCzNLlVp"
); // TEST KEY

function Donate() {
  return (
    <Layout>
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
              class="w-2/4 flex-1 text-sm bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none"
              placeholder="Card Number"
            />
            <input
              type="text"
              id="payment"
              class="w-1/4 inline-block text-sm bg-grey-light text-grey-darkest p-3 focus:outline-none"
              placeholder="MM / YY"
            />
            <input
              type="text"
              id="payment"
              class="w-1/4 inline-block text-sm bg-grey-light text-grey-darkest rounded-r p-3 focus:outline-none"
              placeholder="CVC"
            />
          </div>
        </div>
      </div>
      <Elements stripe={stripePromise}></Elements>
      <form action="/create-checkout-session" method="POST">
        <button type="submit">Donate</button>
      </form>
    </Layout>
  );
}

export default Donate;
