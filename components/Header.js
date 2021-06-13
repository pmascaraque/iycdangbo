import React from "react";
import Link from "next/link";

export default function Header() {

  return (
    <div>
      <Link href="/">
        <a>
          <img alt="" src={"./images/dangbo_logo.jpg"} />
        </a>
      </Link>
    </div>
  );
}
