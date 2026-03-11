import { FaStarOfLife } from "react-icons/fa";

import styles from "./CommitmentValue.module.css";

function CommitmentValue({ heading, text }) {
  return (
    <div className={styles.commitmentValue}>
      <FaStarOfLife color="#0bc4d9" />
      <h4 className={styles.heading}>{heading}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default CommitmentValue;
