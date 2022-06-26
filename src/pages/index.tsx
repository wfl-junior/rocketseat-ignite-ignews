import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Início | ig.news</title>
      </Head>

      <h1 className={styles.title}>
        Hello <span>World</span>
      </h1>
    </Fragment>
  );
};

export default Home;
