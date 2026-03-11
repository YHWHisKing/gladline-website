import styles from "./ContactTag.module.css";

function ContactTag({ icon: Icon, heading, text }) {
  return (
    <div className={`${styles.wrapper} `}>
      <div className={styles.iconWrap} aria-hidden>
        {Icon ? <Icon className={styles.icon} /> : null}
      </div>

      <div className={styles.content}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default ContactTag;
