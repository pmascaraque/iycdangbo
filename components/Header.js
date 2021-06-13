import React from "react";
import Link from "next/link";

export default function Header() {

  return (
    <div className="header">
      <Link href="/">
        <a>
          <img alt="" src={"./images/dangbo_logo.jpg"} />
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
        <a>DONATE</a>
      </Link>
    </div>
  );
}
