import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import styles from "../../styles/Posts.module.scss";

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
