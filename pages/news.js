import React from "react";
import Layout from "../components/Layout";
import { client } from "../config/prismic-configuration";
import Prismic from "prismic-javascript";
import data from "../data/news";
import Link from "next/link";

function News({ posts }) {
  let postList = [];
  posts.results.map((element) => {
    let publicationDate = new Date(element.first_publication_date);
    postList.push(
      <div
        className="bg-white p-4 mt-2 mx-4 rounded-xl border border-opacity-10 border-double border-black md:w-9/12 md:mx-auto lg:w-8/12 xl:w-7/12"
        key={element.id}
      >
        <h1 className="text-xl mb-2">{element.data.title[0].text}</h1>
        <p className="mb-8 text-xs text-gray-800">{Intl.DateTimeFormat("de-DE").format(publicationDate)}</p>
        <p className="mb-5">{element.data.summary[0].text}</p>
        <Link href={element.slugs[0]}>
          <a className="bg-black hover:bg-blue-800 text-white p-2">Leer más</a>
        </Link>
      </div>
    );
  });
  return (
    <Layout>
      <h1 className="pt-20 w-min mx-auto text-4xl">{data.title}</h1>
      <div className="pt-2">{postList}</div>
    </Layout>
  );
}

export default News;

export const getStaticProps = async () => {
  const posts = await client.query(Prismic.Predicates.at("document.type", "post"));
  return {
    props: {
      posts
    }
  };
};
