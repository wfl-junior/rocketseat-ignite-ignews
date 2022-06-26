import Link from "next/link";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export const Header: React.FC = () => (
  <header className={styles.container}>
    <div className={styles.content}>
      <Link href="/">
        <a>
          <img src="/images/logo.svg" alt="ig.news logo" />
        </a>
      </Link>

      <nav>
        <Link href="/">
          <a className={styles.active}>Home</a>
        </Link>

        <Link href="/posts" prefetch>
          <a>Posts</a>
        </Link>
      </nav>

      <SignInButton />
    </div>
  </header>
);
