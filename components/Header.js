import React from "react";
import Link from "next/link";
import styles from "./component_styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <Link href="/">
        <a>
          <img alt="" src={"./dangbo_logo.jpg"} style={{ height: "4em" }} />
        </a>
      </Link>
      <Link href="/about">
        <a>QUIENES SOMOS</a>
      </Link>
      <Link href="/news">
        <a>NOTICIAS</a>
      </Link>
      <Link href="/contact">
        <a>CONTACTO</a>
      </Link>
      <Link href="/donate">
        <a className={styles.donate} style={{ float: "right" }}>
          COLABORA
        </a>
      </Link>
    </div>
  );
}
