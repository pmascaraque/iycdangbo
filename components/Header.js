import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br></br>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <br></br>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}