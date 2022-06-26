import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { Header } from "../components/Header";
import "../styles/global.scss";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>ig.news</title>
      </Head>

      <SessionProvider>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </Fragment>
  );
};

export default App;
