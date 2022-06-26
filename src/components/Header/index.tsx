import styles from "./styles.module.scss";

export const Header: React.FC = () => (
  <header className={styles.container}>
    <div className={styles.content}>
      <img src="/images/logo.svg" alt="ig.news logo" />

      <nav>
        <a href="#" className={styles.active}>
          Home
        </a>
        <a href="#">Posts</a>
      </nav>
    </div>
  </header>
);
