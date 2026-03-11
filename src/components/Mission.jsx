import { FaHandSparkles } from "react-icons/fa";
import styles from "./Mission.module.css";

function Mission({ iconTagline, heading, text, delay = 0 }) {
  return (
    <div
      className={`${styles.mission}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <span className={`${styles.iconTagline}`}>
        <FaHandSparkles className={`${styles.icon}`} /> {iconTagline}
      </span>
      <h3 className={`${styles.heading}`}>{heading}</h3>
      <p className={`${styles.text}`}>{text}</p>
    </div>
  );
}

export default Mission;
