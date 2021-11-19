import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { client } from "../config/prismic-configuration";
import Prismic from "prismic-javascript";
import Story from "../components/Story";
import News from "../components/News";

function Index({ lastPosts }) {
  return (
    <Layout>
      <Hero />
      <Story />
      <News lastPosts={lastPosts} />
    </Layout>
  );
}

export default Index;

export const getStaticProps = async () => {
  const lastPosts = await client.query(Prismic.Predicates.at("document.type", "post"), { pageSize: 3 });
  console.log(lastPosts);
  return {
    props: {
      lastPosts
    }
  };
};
