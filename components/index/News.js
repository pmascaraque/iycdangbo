import React from "react";
import Link from "next/link";
import data from "/data/news";

export default function News({ lastPosts }) {
  let postList = [];
  lastPosts.results.map((element) => {
    let publicationDate = new Date(element.first_publication_date);
    console.log("Element: ", JSON.stringify(element));
    postList.push(
      <div
        className="bg-white p-4 mt-2 mx-4 rounded-xl md:mr-2 md:w-10/12 lg:w-5/12 xl:w-3/12 border border-opacity-10 border-double border-black"
        key={element.id}
      >
        <h1 className="text-xl mb-2">{element.data.title[0].text}</h1>
        <p className="mb-8 text-xs text-gray-800">{Intl.DateTimeFormat("de-DE").format(publicationDate)}</p>
        <p className="mb-5">{element.data.summary[0].text}</p>
        <Link
          href={{
            pathname: "news/[id]",
            query: {
              id: element.slugs[0]
            }
          }}
        >
          <a className="bg-black hover:bg-blue-800 text-white p-2">Leer más</a>
        </Link>
      </div>
    );
  });
  return (
    <div className="border-t-8 border-black pb-10 flex flex-col">
      <h1 className="pt-10 w-min text-4xl mx-auto">{data.title}</h1>
      <div className="pt-2 pb-10 md:flex md:justify-center md:flex-wrap md:px-12">{postList}</div>
      <Link href="/news">
        <a className="bg-black hover:bg-blue-800 text-white p-2 mx-auto">Más noticias</a>
      </Link>
    </div>
  );
}
