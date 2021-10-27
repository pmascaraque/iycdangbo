import React from "react";
import Layout from "../components/Layout";
import { Dangbo, Work, Help } from "../components/page_components/about_texts";
import Hero from "../components/Hero";
import { Link } from "react-scroll";

function Index() {
  return (
    <Layout>
      <Hero />
      <Link to="dangbo" spy={true} smooth={true} duration={500}>
        Dangbo
      </Link>
      <div id="dangbo">
        <Dangbo />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="help">
        <Help />
      </div>
      <Link to="swiper" spy={true} smooth={true} duration={500}>
        Back to Top
      </Link>
    </Layout>
  );
}

export default Index;
