import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export const SignInButton: React.FC = () => {
  const session = useSession();

  if (session.data?.user) {
    return (
      <button
        type="button"
        className={styles.signInButton}
        onClick={() => signOut()}
      >
        <FaGithub size={24} color="#04d361" />
        {session.data.user.name}
        <FiX size={24} color="#737380" className={styles.closeIcon} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub size={24} color="#eba417" />
      Sign in with GitHub
    </button>
  );
};
