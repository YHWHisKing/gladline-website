import photo from "../../assets/Optimized Photos/06OfficeLounge.webp";
import Mission from "../../components/Mission";
import { missions } from "../../helpers/missionData";

import styles from "./MissionBlock.module.css";

function MissionBlock() {
  return (
    <section className={`block`} data-aos="fade-up">
      <div
        className={` restrictContent ${styles.container} ${styles.grid} ${styles.gridCols2}`}
      >
        <img
          className={`${styles.img}`}
          src={photo}
          alt=""
          data-aos="fade-right"
        />

        {missions.map((mission, index) => (
          <Mission
            iconTagline={mission.iconTagline}
            heading={mission.heading}
            text={mission.text}
            key={mission.heading}
            delay={300}
          />
        ))}
      </div>
    </section>
  );
}

export default MissionBlock;
