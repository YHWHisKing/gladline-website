import styles from "./Value.module.css";

function Value({ icon: Icon, heading, text, delay = 0 }) {
  return (
    <div
      className={`${styles.valueCard}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Icon className={`${styles.icon}`} />
      <h3 className={`${styles.heading}`}>{heading}</h3>
      <p className={`${styles.text}`}>{text}</p>
    </div>
  );
}

export default Value;
