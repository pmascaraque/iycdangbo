import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, PaymentElement } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/page_components/CheckoutForm";

const express = require("express");
const app = express();
const stripePromise = loadStripe(
  "pk_test_51JnN3zHnwRpJy9ynon9s3tID7EGhAlZzukRevAvodhXUbQTokppHJEUCOllMdzFw1o8c3044fDzUBmmlVb1tQPcb00VJ0tig1T"
);

const options = {
  // passing the client secret obtained in step 2
  clientSecret: "{{CLIENT_SECRET}}",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  }
};

app.get("/secret", async (req, res) => {
  const intent = res.json({ client_secret: intent.client_secret }); // ... Fetch or create the PaymentIntent
});

(async () => {
  const response = await fetch("/secret");
  const { client_secret: clientSecret } = await response.json();
  // Render the Payment Element using the clientSecret
})();

function Donate() {
  const AmountRef = useRef();
  ç;

  //SKETCHY 5555555555555555555555
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] })
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe"
  };
  const options = {
    clientSecret,
    appearance
  };
  //UP TO HERE 5555555555555555555555

  const [clientSecret, setClientSecret] = useState("");
  return (
    <div className="Form">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default Donate;
