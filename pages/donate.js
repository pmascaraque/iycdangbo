import React, { useState, useEffect } from "react";
import Layout from "/components/layout/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "/components/donate/CheckoutForm";
import Loading from "../components/donate/Loading";
import useTranslation from "next-translate/useTranslation";

const stripePromise = loadStripe(
  "pk_test_51JnN3zHnwRpJy9ynon9s3tID7EGhAlZzukRevAvodhXUbQTokppHJEUCOllMdzFw1o8c3044fDzUBmmlVb1tQPcb00VJ0tig1T"
);

function Donate() {
  const { t } = useTranslation();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
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
          )}{" "}
          <p className="m-7">{t("donate:note")}</p>
        </div>
      </div>
    </Layout>
  );
}

export default Donate;
