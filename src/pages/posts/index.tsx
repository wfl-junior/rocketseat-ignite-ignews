import Prismic from "@prismicio/client";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { Fragment } from "react";
import { getPrismicClient } from "../../services/prismic";
import styles from "../../styles/Posts.module.scss";

interface Content {
  type: string;
  text: string;
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  updatedAtFormatted: string;
}

interface PostsProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    Prismic.predicates.at("document.type", "post"),
    {
      fetch: ["post.title", "post.content"],
      pageSize: 100,
    },
  );

  const posts = response.results.map(post => {
    const updatedAt = new Date(post.last_publication_date!);

    return {
      slug: post.uid!,
      title: RichText.asText(post.data.title),
      excerpt:
        (post.data.content as Content[]).find(
          content => content.type === "paragraph",
        )?.text ?? "Sem texto",
      updatedAt: updatedAt.toLocaleString(),
      updatedAtFormatted: updatedAt.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const Posts: NextPage<PostsProps> = ({ posts }) => (
  <Fragment>
    <Head>
      <title>Posts | ig.news</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        {posts.map(post => (
          <a key={post.slug} href="#">
            <time dateTime={post.updatedAt}>{post.updatedAtFormatted}</time>
            <strong>{post.title}</strong>
            <p>{post.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  </Fragment>
);

export default Posts;
