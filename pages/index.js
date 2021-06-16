import React from "react";
import Layout from "../components/Layout";
import styles from "../components/component_styles/Index.module.css";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import { Dangbo, Work, Help } from "../components/page_components/about_texts";

function Index() {
  return (
    <Layout>
      <div className={styles.navbar}>
        <Link activeClass={styles.active} className={styles.link} to="dangbo" spy={true} smooth={true} duration={500}>
          Dangbo
        </Link>
        <Link activeClass={styles.active} className={styles.link} to="test2" spy={true} smooth={true} duration={500}>
          Asociación
        </Link>
        <Link activeClass={styles.active} className={styles.link} to="test3" spy={true} smooth={true} duration={500}>
          Proyecto
        </Link>
      </div>
      <div id="dangbo">
        <Dangbo />
      </div>
      <div id="test2">
        <Work />
      </div>
      <div id="test3">
        <Help />
      </div>
      <Link to="test1" className={styles.link} spy={true} smooth={true} duration={500}>
        Back to Top
      </Link>
    </Layout>
  );
}

export default Index;
