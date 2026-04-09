import { FaHouseUser, FaBuilding } from "react-icons/fa";

import styles from "./CardBlock.module.css";
import ServiceCard from "../../components/ServiceCard";

function CardBlock() {
  return (
    <section
      className={`block restrictContent ${styles.container} ${styles.blockService}  `}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h2 className={styles.heading}>Our Services</h2>
      <p className={styles.tagline}>
        We turn your space into a refreshed, joyful environment. Every surface
        polished, every corner cared for.
      </p>
      <div
        className={`${styles.grid} ${styles.gridCols2}`}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <ServiceCard
          icon={FaHouseUser}
          heading="Residential Cleaning"
          text="Keep your home spotless with our comprehensive residential cleaning services tailored to your needs."
          items={[
            "Regular house cleaning",
            "Deep cleaning",
            "Move in/out cleaning",
          ]}
          animation="fade-right"
          delay={200}
        />
        <ServiceCard
          icon={FaBuilding}
          heading="Commercial Cleaning"
          text="Professional cleaning solutions for offices, retail spaces, and other commercial properties."
          items={[
            "Office cleaning",
            "Retail space maintenance",
            "Industrial cleaning",
          ]}
          animation="fade-right"
          delay={400}
        />
      </div>
    </section>
  );
}

export default CardBlock;
