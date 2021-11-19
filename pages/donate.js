import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//price should be *100

import CheckoutForm from "../components/page_components/CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51JnN3zHnwRpJy9ynon9s3tID7EGhAlZzukRevAvodhXUbQTokppHJEUCOllMdzFw1o8c3044fDzUBmmlVb1tQPcb00VJ0tig1T"
);

function Donate() {
  const [clientSecret, setClientSecret] = useState("");

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

  return (
    <Layout>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </Layout>
  );
}

export default Donate;
