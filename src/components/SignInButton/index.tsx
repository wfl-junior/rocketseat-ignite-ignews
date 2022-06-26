import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export const SignInButton: React.FC = () => {
  const isUserLoggedIn = true;

  if (isUserLoggedIn) {
    return (
      <button type="button" className={styles.signInButton}>
        <FaGithub size={24} color="#04d361" />
        Diego Fernandes
        <FiX size={24} color="#737380" className={styles.closeIcon} />
      </button>
    );
  }

  return (
    <button type="button" className={styles.signInButton}>
      <FaGithub size={24} color="#eba417" />
      Sign in with GitHub
    </button>
  );
};
