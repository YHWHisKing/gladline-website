import Value from "../../components/Value";
import { values } from "../../helpers/valuesData";

import styles from "./ValuesBlock.module.css";

function ValuesBlock() {
  return (
    <section className={`block`} data-aos="fade-up">
      <div className={`restrictContent ${styles.container}`}>
        <h2 className={`${styles.heading}`}>Our Values</h2>
        <p className={`${styles.text}`}>
          These core principles guide everything we do at Gladline Cleaning:
        </p>
        <div
          className={`${styles.grid} ${styles.gridCols2} ${styles.gridCols4}`}
        >
          {values.map((value, index) => (
            <Value
              icon={value.icon}
              heading={value.heading}
              text={value.text}
              key={value.heading}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesBlock;
