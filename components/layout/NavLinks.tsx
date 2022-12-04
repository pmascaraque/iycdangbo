import React from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export default function NavLinks() {
  const { t } = useTranslation();

  return (
    <div className="text-md md:flex mr-4">
      <Link href={t("header:home.url")}>
        <a className="hover:bg-peach rounded hover:bg-opacity-50 mr-4 p-2 w-max"> {t("header:home.text")}</a>
      </Link>
      <Link href={t("header:about.url")}>
        <a className="hover:bg-peach rounded hover:bg-opacity-50 mr-4 p-2 w-max"> {t("header:about.text")}</a>
      </Link>
      <Link href={t("header:news.url")}>
        <a className="hover:bg-peach rounded hover:bg-opacity-50 mr-4 p-2 w-max"> {t("header:news.text")}</a>
      </Link>
    </div>
  );
}
