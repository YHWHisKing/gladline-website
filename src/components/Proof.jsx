import styles from "./Proof.module.css";

function Proof({ data, delay = 0 }) {
  return (
    <div
      className={`${styles.proofItem}`}
      data-aos="fade-right"
      data-aos-delay={delay}
    >
      <img className={`${styles.img}`} src={data.image} alt="" />
      <h3 className={`${styles.title}`}>{data.title}</h3>
    </div>
  );
}

export default Proof;
