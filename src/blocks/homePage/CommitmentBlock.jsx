import CommitmentValue from "../../components/CommitmentValue";

import { FaHandSparkles } from "react-icons/fa";

import styles from "./CommitmentBlock.module.css";
import Button from "../../components/Button";

function CommitmentBlock() {
  return (
    <section className={`${styles.commitmentBlock}`} data-aos="fade-up">
      <div className={`block grid gridCols2 restrictContent `}>
        <div data-aos="fade-right" data-aos-delay="500">
          <span className={styles.commitmentIconHeading}>
            <FaHandSparkles style={{ color: "white", verticalAlign: "top" }} />{" "}
            Why Us
          </span>
          <h3 className={`${styles.commitmentHeading} `}>
            Our Commitment to Excellence
          </h3>
          <CommitmentValue
            heading={"Personalized attention"}
            text={
              "You receive cleaning tailored to your space and needs. No rushed jobs. No one size fits all routines."
            }
          />
          <CommitmentValue
            heading={"Reliable and professional service"}
            text={
              "You count on punctual arrivals, clear communication, and dependable results."
            }
          />
          <CommitmentValue
            heading={"Integrity driven by faith"}
            text={
              "You work with a team guided by honesty, respect, and a sincere desire to serve."
            }
          />
          <div className={styles.buttonWrap}>
            <Button to="/about" variant="secondary">
              Find Out More
            </Button>
          </div>
        </div>
        <div
          className={styles.commitmentImgContainer}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            className={styles.commitmentImg}
            src="src/assets/Images/blueLatexGloves.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default CommitmentBlock;
