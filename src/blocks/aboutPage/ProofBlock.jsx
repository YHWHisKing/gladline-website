import Proof from "../../components/Proof";
import { proofData } from "../../helpers/proofData";

import styles from "./ProofBlock.module.css";

function ProofBlock() {
  return (
    <section className={`block`}>
      <div className={`restrictContent`}>
        <h2 className={`${styles.heading}`}>
          Reliable, Professional and Committed to Quality
        </h2>
        <p className={`${styles.text}`}>
          We take pride in providing top-notch cleaning services with a focus on
          reliability, professionalism and quality. Our trained team follows
          thorough cleaning procedures to ensure every space is spotless and
          meets the highest standards. Whether it’s routine maintainance or deep
          cleaning, we are dedicated to delivering exceptional results you can
          trust.
        </p>
        <div
          className={`${styles.grid} ${styles.grid3x2}`}
          data-aos="fade-right"
        >
          {proofData.map((proof, i) => (
            <Proof data={proof} key={i} delay={i * 200} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProofBlock;
