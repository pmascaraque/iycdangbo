import React, { useState, useEffect } from "react";
import Layout from "/components/layout/Layout";
import { client } from "/config/prismic-configuration";
import Prismic from "prismic-javascript";
import Link from "next/link";
import Pagination from "../components/news/Pagination";
import useTranslation from "next-translate/useTranslation";

const POSTS_PER_PAGE = 10;

function News({ posts }) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const maxPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  function paginate(pageNumber) {
    if (pageNumber < maxPages && pageNumber >= 0) setCurrentPage(pageNumber);
  }

  let postList = [];

  for (let i = currentPage * POSTS_PER_PAGE; i < posts.length; i++) {
    if (postList.length >= POSTS_PER_PAGE) {
      break;
    }
    postList.push(
      <div
        className="bg-white p-4 mt-2 mx-4 rounded-xl border border-graay md:w-9/12 md:mx-auto lg:w-8/12 xl:w-7/12 hover:bg-peach hover:bg-opacity-20 cursor-pointer"
        key={posts[i].id}
      >
        <Link
          href={{
            pathname: "news/[id]",
            query: {
              id: posts[i].id
            }
          }}
        >
          <a>
            <h1 className="text-xl mb-2 text-maroon font-bold font-display">{posts[i].title}</h1>
            <p className="mb-8 text-xs text-maroon font-body">{posts[i].date}</p>
            <p className="mb-5 text-redy font-body">{posts[i].summary}</p>
          </a>
        </Link>
      </div>
    );
  }

  return (
    <Layout>
      <h1 className="pt-24 w-min mx-auto text-4xl text-maroon font-display">{t("news:title")}</h1>
      <div className="pt-2 pb-10">{postList}</div>
      <div className="pb-20">
        <Pagination currentPage={parseInt(currentPage)} maxPages={parseInt(maxPages)} paginate={paginate} />
      </div>
    </Layout>
  );
}

export default News;

export const getStaticProps = async () => {
  const json = await client.query(Prismic.Predicates.at("document.type", "entrada"));
  const posts = json.results.map((post) => {
    return {
      id: post.slugs[0],
      title: post.data.title[0].text,
      date: post.data.date != null ? post.data.date : "2010-01-01",
      summary: post.data.summary[0].text
    };
  });

  return {
    props: {
      posts: posts.sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return aDate < bDate ? 1 : -1;
      })
    }
  };
};
