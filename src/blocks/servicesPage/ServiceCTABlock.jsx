import Button from "../../components/Button";

import styles from "./ServiceCTABlock.module.css";

function ServiceCTABlock() {
  return (
    <section className={`${styles.block} ${styles.backgroundImg}`}>
      <div
        className={`restrictContent ${styles.serviceCTABlock} `}
        data-aos="fade-up"
      >
        <h2 className={`${styles.heading}`}>Ready to transform your space ?</h2>
        <p className={`${styles.text}`}>
          Contact us today to book your cleaning service or learn more about how
          we keep your home or workplace clean, fresh, and well cared for.
        </p>
        <Button
          to="/contact"
          variant="primary"
          className={`${styles.ctaButton}`}
        >
          Get A Free Quote
        </Button>
      </div>
    </section>
  );
}

export default ServiceCTABlock;
