import React from "react";
import Layout from "../components/Layout";
import { Dangbo, Work, Help } from "../components/page_components/about_texts";
import Hero from "../components/Hero";
import { Link } from "react-scroll";
import Story from "../components/Story";

function Index() {
  return (
    <Layout>
      <Hero />
      <Story />
    </Layout>
  );
}

export default Index;
