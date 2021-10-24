import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a>
          <img alt="" src={"./dangbo_logo.jpg"} />
        </a>
      </Link>
      <Link href="/news">
        <a>NOTICIAS</a>
      </Link>
      <Link href="/about">
        <a>QUIENES SOMOS</a>
      </Link>
      <Link href="/contact">
        <a>CONTACTO</a>
      </Link>
      <Link href="/donate">
        <a>COLABORA</a>
      </Link>
    </div>
  );
}
