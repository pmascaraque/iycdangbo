import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Stripe from "Stripe";

//price should be *100

import CheckoutForm from "../components/page_components/CheckoutForm";

function Donate() {
  return (
    <Layout>
      <CheckoutForm />
    </Layout>
  );
}

export default Donate;
