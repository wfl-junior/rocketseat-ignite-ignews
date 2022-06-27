import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { Fragment } from "react";
import { getPrismicClient } from "../../services/prismic";
import styles from "../../styles/Post.module.scss";

interface Post {
  slug: string;
  title: string;
  content: string;
  updatedAtDateTime: string;
  updatedAtFormatted: string;
}

interface PostProps {
  post: Post;
}

export const getServerSideProps: GetServerSideProps<
  PostProps,
  { slug: string }
> = async ({ req, params }) => {
  const session = await getSession({ req });
  const prismic = getPrismicClient(req);

  const { slug } = params!;
  const response = await prismic.getByUID("post", slug, {});
  const updatedAt = new Date(response.last_publication_date!);

  const post: Post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAtDateTime: updatedAt.toLocaleString(),
    updatedAtFormatted: updatedAt.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };

  return {
    props: {
      post,
    },
  };
};

const Post: NextPage<PostProps> = ({ post }) => (
  <Fragment>
    <Head>
      <title>{post.title} | ig.news</title>
    </Head>

    <main className={styles.container}>
      <article className={styles.post}>
        <h1>{post.title}</h1>
        <time dateTime={post.updatedAtDateTime}>{post.updatedAtFormatted}</time>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  </Fragment>
);

export default Post;
