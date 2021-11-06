import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { Link } from "react-scroll";
import { client } from "../config/prismic-configuration";
import Prismic from "prismic-javascript";
import Story from "../components/Story";

function Index({ posts }) {
  return (
    <Layout>
      <Hero />
      <Story />
    </Layout>
  );
}

export default Index;

// export const getStaticProps = async () => {
//   const posts = await client.query(Prismic.Predicates.at("document.type", "post"));
//   return {
//     props: {
//       posts
//     }
//   };
// };
