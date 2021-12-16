import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { client } from "../../config/prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import useTranslation from "next-translate/useTranslation";

const Post = ({ content, title, date }) => {
  return (
    <Layout>
      <div className="w-screen flex-none md:flex md:justify-center">
        <div className="post">
          <RichText render={title} />
          <span>{date}</span>
          <div className="content">
            <RichText render={content} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await client.query(Prismic.Predicates.at("document.type", "entrada"), { lang: "*" });
  const pathNames = posts.results.map((post) => {
    return {
      params: {
        id: post.slugs[0]
      }
    };
  });

  return {
    paths: [...pathNames],
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  let lang = "";
  if (context.locale == "es") lang = "es-es";
  else lang = "en-us";
  const posts = await client.query(Prismic.Predicates.at("document.type", "entrada"), { lang: `${lang}` });

  const currentPost = posts.results.filter((post) => post.slugs.includes(context.params?.id))[0];
  return {
    props: {
      content: currentPost.data.content,
      title: currentPost.data.title,
      date: currentPost.data.date
    }
  };
};

export default Post;
