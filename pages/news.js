import React from "react";
import Layout from "../components/Layout";
import { client } from "../config/prismic-configuration";
import Prismic from "prismic-javascript";

function News({ posts }) {
  let postList = [];
  posts.results.map((element) => {
    let publicationDate = new Date(element.first_publication_date);
    postList.push(
      <div className="bg-white p-4 mt-2 mx-4 rounded-xl" key={element.id}>
        <h1 className="text-xl mb-2">{element.data.title[0].text}</h1>
        <p className="mb-8 text-xs text-gray-800">{Intl.DateTimeFormat("de-DE").format(publicationDate)}</p>
        <p>{element.data.summary[0].text}</p>
      </div>
    );
  });
  return (
    <Layout>
      <div className="pt-24">{postList}</div>
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
