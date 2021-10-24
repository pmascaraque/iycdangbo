import React, { useState } from "react";
import Layout from "../components/Layout";
import { Dangbo, Work, Help } from "../components/page_components/about_texts";

function About() {
  const [active, setActive] = useState(1);
  return (
    <Layout>
      <div>
        <button
          onClick={() => {
            setActive(1);
          }}
        >
          DANGBO
        </button>
        <button
          onClick={() => {
            setActive(2);
          }}
        >
          NOSOTROS
        </button>
        <button
          onClick={() => {
            setActive(3);
          }}
        >
          COMO PUEDES AYUDAR
        </button>
      </div>
      <div>{active === 1 ? <Dangbo /> : active === 2 ? <Work /> : <Help />}</div>
    </Layout>
  );
}

export default About;
