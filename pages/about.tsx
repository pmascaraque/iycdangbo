import React from "react";
import Layout from "../components/layout/Layout";
import Dangbo from "../components/about/Dangbo";
import Sponsors from "../components/about/Sponsors";
import Association from "../components/about/Association";
import Extra from "../components/about/Extra";

function About() {
  return (
    <Layout>
      <Dangbo />
      <Association />
      <Sponsors />
      <Extra />
    </Layout>
  );
}

export default About;
