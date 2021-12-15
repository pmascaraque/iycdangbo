import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="py-8 bg-maroon text-white flex justify-around flex-wrap lg:text-2xl lg:px-48 2xl:px-96 2xl:text-3xl font-display">
      <div className="mx-2 pt-4">
        <h1 className="text-md">{t("footer:contact.title")}</h1>
        <div className="flex flex-col text-xs text-gray-200">
          <a href={t("footer:contact.links.email.url")} target="_blank" className="hover:text-white py-1">
            {t("footer:contact.links.email.text")}
          </a>
          <a href={t("footer:contact.links.instagram.url")} target="_blank" className="hover:text-white py-1">
            {t("footer:contact.links.instagram.text")}
          </a>
          <a href={t("footer:contact.links.facebook.url")} target="_blank" className="hover:text-white py-1">
            {t("footer:contact.links.facebook.text")}
          </a>
        </div>
      </div>
      <div className="mx-2 pt-4">
        <h1 className="text-md">{t("footer:about.title")}</h1>
        <div className="flex flex-col text-xs text-gray-200">
          <a href={t("footer:about.links.about.url")} target="_blank" className="hover:text-white py-1">
            {t("footer:about.links.about.text")}
          </a>
          <a href={t("footer:about.links.privacy.url")} target="_blank" className="hover:text-white py-1">
            {t("footer:about.links.privacy.text")}
          </a>
          <a href={t("footer:about.links.terms.url")} target="_blank" className="hover:text-white py-1">
            {t("footer:about.links.terms.text")}
          </a>
        </div>
      </div>
      <div className="mx-2 pt-4">
        <h1 className="text-md">{t("footer:news.title")}</h1>
        <div className="flex flex-col text-xs text-gray-200">
          <a href={t("footer:news.links.news.url")} target="_blank" className="hover:text-white py-1">
            {t("footer:news.links.news.text")}
          </a>
        </div>
      </div>
    </div>
  );
}
