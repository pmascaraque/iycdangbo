import React from "react";
import Layout from "../components/Layout";
import Dangbo from "../components/about/Dangbo";
import Sponsors from "../components/about/Sponsors";
import Aso from "../components/about/Aso";
import Extra from "../components/about/Extra";

function About() {
  return (
    <Layout>
      <Dangbo />
      <Aso />
      <Sponsors />
      <Extra />
    </Layout>
  );
}

export default About;
