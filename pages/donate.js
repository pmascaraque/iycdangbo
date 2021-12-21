import React, { useRef, useState, useEffect } from "react";
import Layout from "/components/layout/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "/components/donate/CheckoutForm";
import Loading from "../components/donate/Loading";
import useTranslation from "next-translate/useTranslation";

const stripePromise = loadStripe(
  "pk_test_51JnN3zHnwRpJy9ynon9s3tID7EGhAlZzukRevAvodhXUbQTokppHJEUCOllMdzFw1o8c3044fDzUBmmlVb1tQPcb00VJ0tig1T"
);
//price should be *100
function Donate() {
  //NEED MYSQL DB TO STORE CLIENT SECRET
  const { t } = useTranslation();
  const clientSecret = "pi_3K2vj2HnwRpJy9yn0hl8isXp_secret_D6uXO75Tzxr7V8Zc07yIBPKcr";

  // useEffect(() => {

  // }, []);

  const handleCustomerPortal = () => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/create-customer-portal-session/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId: "cus_KiN5p2rCu4kPU5" })
    })
      .then((res) => res.json())
      .then((session) => {
        console.log("session", session);
        window.open(session.url);
      });
  };

  //client secret visible????

  const appearance = {
    theme: "stripe"
  };
  const options = {
    clientSecret,
    appearance
  };

  const submit = async (e) => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/create-customer-portal-session/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
  };

  return (
    <Layout>
      <div className=" w-screen mb-10">
        <h1 className="pt-24 w-max pb-10 text-2xl  md:text-4xl font-bold mx-auto font-display text-maroon">
          {t("donate:header")}
        </h1>
        <div className="w-11/12 md:w-8/12 lg:w-5/12 mx-auto p-2 rounded-md shadow-xl border-4 border-maroon pb-14">
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
