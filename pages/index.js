import React from "react";
import { render } from "react-dom";
import Layout from "../components/Layout";
import styles from "../components/component_styles/Index.module.css";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import { Dangbo, Work, Help } from "../components/page_components/about_texts";

function Index() {
  return (
    <Layout>
      <div className={styles.navbar}>
        <Link activeClass={styles.active} to="test1" spy={true} smooth={true} duration={500}>
          Test 1
        </Link>
        <Link activeClass={styles.active} to="test2" spy={true} smooth={true} duration={500}>
          Test 2
        </Link>
        <Link activeClass={styles.active} to="test3" spy={true} smooth={true} duration={500}>
          Test 3
        </Link>
      </div>
      <div id="test1">
        <Dangbo />
      </div>
      <div id="test2">
        <Work />
      </div>
      <div id="test3">
        <Help />
      </div>
    </Layout>
  );
}

export default Index;
