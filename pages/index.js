import React from "react";
import Layout from "../components/Layout";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import ImageSwiper from "../components/page_components/index_image_swiper";
import { Dangbo, Work, Help } from "../components/page_components/about_texts";
import "tailwindcss/tailwind.css";

function Index() {
  return (
    <Layout>
      <div>
        <Link to="dangbo" spy={true} smooth={true} duration={500}>
          Dangbo
        </Link>
        <Link to="work" spy={true} smooth={true} duration={500}>
          Asociación
        </Link>
        <Link to="help" spy={true} smooth={true} duration={500}>
          Proyecto
        </Link>
      </div>
      {/* <div id="swiper">
        <ImageSwiper />
      </div> */}
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
