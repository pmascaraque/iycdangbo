import React from "react";
import Link from "next/link";
import styles from "../component_styles/About.module.css";

export default function About_navbar() {
  return (
    <div className={styles.header}>
      <button>DANGBO</button>
      <button>OUR WORK</button>
      <button>HOW YOU CAN HELP</button>
    </div>
  );
}
