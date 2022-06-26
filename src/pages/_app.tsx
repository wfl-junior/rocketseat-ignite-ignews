import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import "../styles/global.scss";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>ig.news</title>
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
