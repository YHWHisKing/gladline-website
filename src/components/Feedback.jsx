import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./Feedback.module.css";
import Button from "./Button";

function Feedback({ type, heading, message, onRetry }) {
  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      <h2 className={`${styles.heading}`}>{heading}</h2>

      <p className={styles.message}>
        {type === "success" ? (
          <FaCheckCircle size={22} className={styles.successIcon} />
        ) : (
          <IoMdCloseCircle size={22} className={styles.errorIcon} />
        )}

        <span>{message}</span>
      </p>

      {/* show a retry button if an error occurred and a handler was provided */}
      {type === "error" && onRetry && (
        <Button
          variant="secondary"
          onClick={onRetry}
          className={styles.retryBtn}
        >
          Try Again
        </Button>
      )}
    </div>
  );
}

export default Feedback;
