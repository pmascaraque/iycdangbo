import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function News({ lastPosts }) {
  const { t } = useTranslation();

  let postList = [];
  lastPosts.results.map((element) => {
    let publicationDate = new Date(element.first_publication_date);
    postList.push(
      <div
        className="bg-white p-4 mt-2 mx-4 rounded-lg md:mr-2 md:w-10/12 lg:w-5/12 xl:w-3/12 border border-opacity-10 border-double border-maroon hover:bg-peach hover:bg-opacity-20 cursor-pointer"
        key={element.id}
      >
        <Link
          href={{
            pathname: "news/[id]",
            query: {
              id: element.slugs[0]
            }
          }}
        >
          <div className="">
            <h1 className="text-maroon text-xl mb-2 font-bold font-display">{element.data.title[0].text}</h1>
            <p className="mb-8 text-xs text-maroon font-body">{Intl.DateTimeFormat("de-DE").format(publicationDate)}</p>
            <p className="mb-2 text-redy font-body">{element.data.summary[0].text}</p>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="border-t-8 border-maroon hover:bg-opacity-70 pb-10 flex flex-col">
      <h1 className="pt-10 w-min text-4xl mx-auto text-maroon font-display">{t("news-section:title")}</h1>
      <div className="pt-2 pb-10 md:flex md:justify-center md:flex-wrap md:px-12 ">{postList}</div>
      <Link href="/news">
        <a className="bg-maroon hover:bg-peach hover:text-maroon text-peach p-2 mx-auto rounded font-body">
          {t("news-section:button")}
        </a>
      </Link>
    </div>
  );
}
