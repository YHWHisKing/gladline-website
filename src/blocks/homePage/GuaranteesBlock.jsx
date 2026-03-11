import Guarantee from "../../components/Guarantee";

import styles from "./GuaranteesBlock.module.css";
import { guarantees } from "../../helpers/guaranteesData";

function GuaranteesBlock() {
  return (
    <section className={`block ${styles.container}`} data-aos="zoom-out">
      <div className={`restrictContent ${styles.guaranteesBlock}`}>
        {guarantees.map((guarantee, index) => (
          <Guarantee
            key={guarantee.title} // Add key for React reconciliation
            icon={guarantee.icon}
            title={guarantee.title}
            text={guarantee.text}
            delay={index * 200} // Stagger animations: 0ms, 200ms, 400ms, 600ms
          />
        ))}
      </div>
    </section>
  );
}

export default GuaranteesBlock;
