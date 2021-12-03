import React, { useEffect, useState, useRef } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const amountRef = useRef(5);

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    amountRef.current.value = 5;
    const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalAmount = amountRef.current.value * 100;

    fetch("http://localhost:4242/update-payment-intent/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ finalAmount })
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "https://localhost/thanks/"
      }
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center m-2">
        <p>Su importe</p>
        <input className="ml-8 border-2 rounded" type="number" ref={amountRef}></input>
      </div>

      <div className="p-4 flex justify-center md:px-24 lg:px-48 xl:px-60">
        <img src="https://ik.imagekit.io/300/0IyCDangboResources/Component_1_aFEO7EeAy.png?updatedAt=1637828751624" />
      </div>
      <PaymentElement id="payment-element" />

      <button
        className="text-2xl bg-gray-800 hover:bg-green-300 hover:text-black text-white p-3 mt-6 flex mx-auto"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">{isLoading ? <div className="spinner" id="spinner"></div> : "Donate"}</span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div className="relative top-12" id="payment-message">
          {message}
        </div>
      )}
    </form>
  );
}
