import Button from "../components/Button";
import { FaCheckCircle } from "react-icons/fa";

import styles from "./CleaningService.module.css";

function CleaningService({ cleaningType, animation = "fade-left", delay = 0 }) {
  return (
    <>
      <div
        className={`${styles.container}`}
        data-aos={animation}
        data-aos-delay={delay}
      >
        <h2 className={`${styles.heading}`}>{cleaningType.title}</h2>
        <p className={`${styles.text}`}>{cleaningType.text}</p>
        <ul className={`${styles.iconList}`}>
          {cleaningType.iconList.map((item) => (
            <li key={item}>
              <span>
                <FaCheckCircle className={styles.icon} />
              </span>{" "}
              {item}
            </li>
          ))}
        </ul>
        <Button
          to="/contact"
          variant="primary"
          className={styles.cleaningButton}
        >
          {cleaningType.buttonText}
        </Button>
      </div>
      <img className={`${styles.img}`} src={cleaningType.image} alt="" />
    </>
  );
}

export default CleaningService;
