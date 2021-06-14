import React, { useState } from "react";
import Layout from "../components/Layout";
import styles from "../components/component_styles/About.module.css";

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
      {active}
    </Layout>
  );
}

export default About;
