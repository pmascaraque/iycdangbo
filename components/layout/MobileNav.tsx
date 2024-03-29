import React from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="inline-flex items-center bg-gray-50 bg-opacity-30 justify-center p-2 rounded-md hover:bg-peach hover:bg-opacity-50 focus:outline-none md:hidden"
        onClick={() => setOpen(!open)}
      >
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-maroon"></span>
          <span className="block w-8 h-0.5 bg-maroon"></span>
          <span className="block w-5 h-0.5 bg-maroon"></span>
        </div>
      </button>
      {open && (
        <div className="absolute w-screen h-screen bg-white right-20 -top-2 pl-36 flex flex-col pt-32">
          <Link href={t("header:home.url")}>
            <a className="hover:bg-peach rounded hover:bg-opacity-50 mb-4 p-2 w-max"> {t("header:home.text")}</a>
          </Link>
          <Link href={t("header:about.url")}>
            <a className="hover:bg-peach rounded hover:bg-opacity-50 mb-4 p-2 w-max"> {t("header:about.text")}</a>
          </Link>
          <Link href={t("header:news.url")}>
            <a className="hover:bg-peach rounded hover:bg-opacity-50 mb-4 p-2 w-max"> {t("header:news.text")}</a>
          </Link>
        </div>
      )}
    </div>
  );
}
