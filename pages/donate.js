import React, { useRef, useState, useEffect } from "react";
import Layout from "/components/layout/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "/components/donate/CheckoutForm";
import data from "../data/donate";
import Loading from "../components/donate/Loading";

const stripePromise = loadStripe(
  "pk_test_51JnN3zHnwRpJy9ynon9s3tID7EGhAlZzukRevAvodhXUbQTokppHJEUCOllMdzFw1o8c3044fDzUBmmlVb1tQPcb00VJ0tig1T"
);
//price should be *100
function Donate() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
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
      <div className=" w-screen mb-10">
        <h1 className="pt-24 w-max mx-auto text-3xl pb-8">{data.title}</h1>
        <div className="w-11/12 md:w-8/12 mx-auto p-2 rounded-md shadow-lg border-2 border-green-200 pb-14">
          {clientSecret ? (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Donate;
