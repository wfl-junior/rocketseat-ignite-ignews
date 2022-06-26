import { signIn, useSession } from "next-auth/react";
import { useCallback } from "react";
import styles from "./styles.module.scss";

export const SubscribeButton: React.FC = () => {
  const { data: session } = useSession();

  const handleSubscribe = useCallback(() => {
    if (!session) {
      signIn("github");
      return;
    }

    // criação da checkout session
  }, [session]);

  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
};
