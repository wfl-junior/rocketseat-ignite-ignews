import Prismic from "@prismicio/client";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { getPrismicClient } from "../../services/prismic";
import styles from "../../styles/Posts.module.scss";

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    Prismic.predicates.at("document.type", "Post"),
    {
      fetch: ["Post.title", "Post.content"],
      pageSize: 100,
    },
  );

  console.log(response);

  return {
    props: {},
  };
};

const Posts: NextPage = () => (
  <Fragment>
    <Head>
      <title>Posts | ig.news</title>
    </Head>

    <main className={styles.container}>
      <div className={styles.posts}>
        <a href="#">
          <time dateTime={new Date("2021-03-12").toLocaleString()}>
            12 de março de 2021
          </time>

          <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>

          <p>
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </p>
        </a>
        <a href="#">
          <time>12 de março de 2021</time>

          <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>

          <p>
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </p>
        </a>
        <a href="#">
          <time>12 de março de 2021</time>

          <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>

          <p>
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </p>
        </a>
      </div>
    </main>
  </Fragment>
);

export default Posts;
