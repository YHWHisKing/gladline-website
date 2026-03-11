import photo from "../../assets/Optimized Photos/03KitchenIsland.webp";

import styles from "./StoryBlock.module.css";

function StoryBlock() {
  return (
    <section className={`block`} data-aos="zoom-in" data-aos-duration="1100">
      <div className={`restrictContent ${styles.grid}  ${styles.gridCols2}`}>
        <div className={`${styles.story}`}>
          <h2 className={`${styles.heading}`}>Our Story</h2>
          <p className={`${styles.text}`}>
            GLADLINE CLEANING is a locally owned and operated cleaning service
            based in Little Elm, Texas. Our team is dedicated to providing
            exceptional cleaning services with a focus on punctuality,
            consistency, and trustworthiness. We believe in the power of a clean
            and joyful space to enhance your well-being and productivity.
          </p>
        </div>
        <img className={`${styles.storyImg}`} src={photo} alt="" />
      </div>
    </section>
  );
}

export default StoryBlock;
