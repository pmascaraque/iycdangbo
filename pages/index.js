import React from "react";
import Layout from "../components/Layout";
import styles from "../components/component_styles/Index.module.css";

function Index() {
  return (
    <Layout>
      <a className={styles.active} href="https://infanciaycirugiaendangbo.org/">https://infanciaycirugiaendangbo.org/</a>
    </Layout>
  );
}

export default Index;
