import styles from "./Guarantee.module.css";

function Guarantee({ icon: Icon, title, text, delay = 0 }) {
  return (
    <div
      className={`${styles.guarantee}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Icon className={`${styles.icon}`} />
      <h2 className={`${styles.title}`}>{title}</h2>
      <p className={`${styles.text}`}>{text}</p>
    </div>
  );
}

export default Guarantee;
