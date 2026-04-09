import Button from "./Button";

import { FaHouseUser } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import styles from "./ServiceCard.module.css";

function ServiceCard({
  icon: Icon,
  heading,
  text,
  items,
  animation = "fade-right",
  delay = 0,
}) {
  // You need a capitalized name to render a component. Hence, 'Icon'
  return (
    <div className={styles.card} data-aos={animation} data-aos-delay={delay}>
      <header className={styles.cardHeader}>
        <Icon size="2em" color="#f25c05" />
        <h3 className={styles.cardHeading}>{heading}</h3>
      </header>
      <div className={styles.cardBody}>
        <p className={`${styles.cardText}`}>{text}</p>

        <ul className={styles.iconServiceList}>
          {items.map((item) => (
            <li key={item}>
              <FaCheck size=".9em" color="#787676" /> {item}
            </li>
          ))}
        </ul>

        <Button to="services" variant="tertiary">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default ServiceCard;
