import Layout from "../../components/layout/Layout";
import { client } from "../../config/prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";

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

export const getStaticPaths = async ({ locales }) => {
  const posts = await client.query(Prismic.Predicates.at("document.type", "entrada"), { lang: "*" });

  const path = (locale) =>
    posts.results.map((post) => ({
      params: {
        id: post.slugs[0]
      },
      locale
    }));

  const paths = locales.map((locale) => path(locale)).flat();

  return {
    paths: [...paths],
    fallback: true
  };
};

export const getStaticProps = async (context) => {
  let lang = "";
  if (context.locale == "es") lang = "es-es";
  else lang = "en-us";
  const posts = await client.query(Prismic.Predicates.at("document.type", "entrada"), { lang: `${lang}` });

  const currentPost = posts.results.filter((post) => post.slugs.includes(context.params?.id))[0];

  if (!currentPost) {
    return {
      redirect: {
        destination: `/${context.locale}/news`,
        permanent: true
      }
    };
  }

  return {
    props: {
      content: currentPost.data.content,
      title: currentPost.data.title,
      date: currentPost.data.date
    }
  };
};

export default Post;
