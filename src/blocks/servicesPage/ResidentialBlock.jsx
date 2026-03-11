import CleaningService from "../../components/CleaningService";

import { cleaningData } from "../../helpers/cleaningServices";

import styles from "./ResidentialBlock.module.css";

function ResidentialBlock() {
  return (
    <section className={`block`}>
      <div className={`restrictContent ${styles.content}`}>
        <p className={`${styles.text}`} data-aos="zoom-in">
          Our cleaning services bring joy to every space we touch, leaving it
          sparkling clean and stress free. You receive reliable care for homes
          and offices, with consistent results every visit. We also handle move
          in and move out cleaning to help you start or close a chapter with
          confidence. Our deep cleaning service targets built up dirt and hidden
          areas, restoring freshness and comfort. No matter the service, you get
          a clean space you trust every time.
        </p>
        <article className={`${styles.grid} ${styles.gridCols2} `}>
          {cleaningData.map((cleaningType, index) => (
            <CleaningService
              cleaningType={cleaningType}
              key={cleaningType.title}
              animation={index === 0 ? "fade-left" : "fade-right"}
              delay={index * 100}
            />
          ))}
        </article>
      </div>
    </section>
  );
}

export default ResidentialBlock;
