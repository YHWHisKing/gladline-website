import styles from "./Testimonial.module.css";

import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonial({ text, author, className }) {
  return (
    <article className={`${styles.testimonial} ${className}`}>
      <RiDoubleQuotesL size="3em" color="#5b5b5b61" />
      <h2 className={styles.heading}>{text}</h2>
      <p className={styles.author}>{author}</p>
    </article>
  );
}

export default Testimonial;
