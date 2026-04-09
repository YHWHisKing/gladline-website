import Button from "../../components/Button";
import styles from "./CallToActionBlock.module.css";

function CallToActionBlock() {
  return (
    <section className={`block ${styles.backgroundImg}`}>
      <div className={`restrictContent ${styles.callToActionBlock} `}>
        <h2 data-aos="zoom-in" className={`${styles.heading}`}>
          Questions ?
        </h2>
        <p className={`${styles.text}`}>
          Whether you’re curious about our services, trading hours or wish to
          set up a cleaning schedule, feel free to get in touch.
        </p>
        <Button
          to="contact"
          variant="primary"
          className={`${styles.ctaButton}`}
        >
          Let's Talk Now
        </Button>
      </div>
    </section>
  );
}

export default CallToActionBlock;
