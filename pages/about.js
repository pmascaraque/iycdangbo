import React, { useState } from "react";
import Layout from "../components/Layout";
import styles from "../components/component_styles/About.module.css";
import Dangbo from "../components/page_components/about_texts/Dangbo.js";
import Help from "../components/page_components/about_texts/Help.js";
import Work from "../components/page_components/about_texts/Work.js";

function About() {
  const [active, setActive] = useState(1);
  return (
    <Layout>
      <div className={styles.header}>
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
          OUR WORK
        </button>
        <button
          onClick={() => {
            setActive(3);
          }}
        >
          HOW YOU CAN HELP
        </button>
      </div>
      {active === 1 ? <Dangbo /> : active === 2 ? <Work /> : <Help />}
    </Layout>
  );
}

export default About;
