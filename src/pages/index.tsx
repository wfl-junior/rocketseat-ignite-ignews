import { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <h1 className={styles.title}>
      Hello <span>World</span>
    </h1>
  );
};

export default Home;
