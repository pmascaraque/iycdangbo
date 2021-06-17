import React from "react";
import Layout from "../components/Layout";
import styles from "../components/component_styles/Index.module.css";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import ImageSwiper from "../components/page_components/Index_image_swiper";
import { Dangbo, Work, Help } from "../components/page_components/About_texts";

function Index() {
  return (
    <Layout>
      <div className={styles.navbar}>
        <Link activeClass={styles.active} className={styles.link} to="dangbo" spy={true} smooth={true} duration={500}>
          Dangbo
        </Link>
        <Link activeClass={styles.active} className={styles.link} to="work" spy={true} smooth={true} duration={500}>
          Asociación
        </Link>
        <Link activeClass={styles.active} className={styles.link} to="help" spy={true} smooth={true} duration={500}>
          Proyecto
        </Link>
      </div>
      <div id="swiper" className={styles.swiper}>
        <ImageSwiper />
      </div>
      <Link to="dangbo" className={styles.link} spy={true} smooth={true} duration={500}>
        Dangbo
      </Link>
      <div id="dangbo" className={styles.dangbo}>
        <Dangbo />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="help">
        <Help />
      </div>
      <Link to="swiper" className={styles.link} spy={true} smooth={true} duration={500}>
        Back to Top
      </Link>
    </Layout>
  );
}

export default Index;
