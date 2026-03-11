import { FaHandSparkles } from "react-icons/fa";
import TeamMember from "../../components/TeamMember";

import { teamMembers } from "../../helpers/teamMembers";
import styles from "./TeamBlock.module.css";

function TeamBlock() {
  return (
    <section className={`block ${styles.teamBlock}`}>
      <div
        className={`restrictContent`}
        data-aos="zoom-out"
        data-aos-delay="100"
      >
        <span className={`${styles.iconTagline}`}>
          <FaHandSparkles className={`${styles.icon}`} /> The Team
        </span>

        <h2 className={`${styles.heading}`}>Meet Our Team</h2>

        <div className={`${styles.grid}`}>
          {teamMembers.map((teamMember) => (
            <TeamMember
              image={teamMember.image}
              memberName={teamMember.memberName}
              role={teamMember.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamBlock;
