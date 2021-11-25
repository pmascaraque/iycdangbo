import Layout from "../../components/layout/Layout";
import Link from "next/link";
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
          <Link href="/news">
            <a className="back-button">Volver</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await client.query(Prismic.Predicates.at("document.type", "entrada"));
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
  const posts = await client.query(Prismic.Predicates.at("document.type", "entrada"));

  const currentPost = posts.results.filter((post) => post.slugs[0] == context.params?.id)[0];
  let publicationDate = new Date(currentPost.first_publication_date);
  const date = Intl.DateTimeFormat("de-DE").format(publicationDate);
  return {
    props: {
      content: currentPost.data.content,
      title: currentPost.data.title,
      date: date
    }
  };
};

export default Post;
