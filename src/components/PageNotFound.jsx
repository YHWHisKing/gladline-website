import { FaExclamationTriangle } from "react-icons/fa";
import styles from "./PageNotFound.module.css";
import Button from "./Button";

function PageNotFound() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <FaExclamationTriangle className={styles.icon} />

        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>Page not found</h2>

        <p className={styles.text}>
          The page you tried to access does not exist or the link is broken.
        </p>

        <Button to="/" variant="secondary" className={styles.button}>
          Return to home
        </Button>
      </div>
    </section>
  );
}

export default PageNotFound;
