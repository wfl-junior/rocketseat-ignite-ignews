import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>

          <h1>
            News about <br /> the <span>React</span> world
          </h1>

          <p>
            Get access to all the publications <br />
            <span>for $9.90/month</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </Fragment>
  );
};

export default Home;
