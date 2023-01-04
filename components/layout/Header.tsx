import React from "react";
import useTranslation from "next-translate/useTranslation";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="h-16 absolute bg-white top-0 z-10 w-full px-2 flex justify-between items-center md:place-items-center p-2 md:justify-between font-display">
      <MobileNav />
      <div className="hidden md:inline">
        <NavLinks />
      </div>
    </div>
  );
}
