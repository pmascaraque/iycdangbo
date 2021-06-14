import React from "react";
import Link from "next/link";
import styles from "./component_styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <style jsx global>{`
        * {
          margin: 0;
        }
      `}</style>
      <Link href="/">
        <a>
          <img alt="" src={"./dangbo_logo.jpg"} style={{ height: "4em" }} />
        </a>
      </Link>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Link href="/news">
        <a>NEWS</a>
      </Link>
      <Link href="/contact">
        <a>CONTACT US</a>
      </Link>
      <Link href="/donate">
        <a className={styles.donate} style={{ float: "right" }}>
          DONATE NOW
        </a>
      </Link>
    </div>
  );
}
