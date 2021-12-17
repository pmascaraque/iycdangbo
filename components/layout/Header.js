import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="h-16 absolute bg-white top-0 z-10 w-full px-2 flex justify-between items-center md:place-items-center p-2 md:justify-between font-display">
      <a className="flex place-items-center pt-4" href="/">
        <img src={t("header:logoURL")} className="w-28 md:ml-2" />
      </a>
      <MobileNav />
      <div className="hidden md:inline">
        <NavLinks />
      </div>
    </div>
  );
}
