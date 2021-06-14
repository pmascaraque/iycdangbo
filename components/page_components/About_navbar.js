import React from "react";
import Link from "next/link";
import styles from "../component_styles/About.module.css";

export default function About_navbar() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>DANGBO</a>
      </Link>
      <Link href="/about">
        <a>OUR WORK</a>
      </Link>
      <Link href="/news">
        <a>HOW TO HELP</a>
      </Link>
    </div>
  );
}
