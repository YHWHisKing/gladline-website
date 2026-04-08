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

        <div className={`${styles.grid} ${styles.contentWrapper}`}>
          {/* {teamMembers.map((teamMember) => (
            <TeamMember
              image={teamMember.image}
              memberName={teamMember.memberName}
              role={teamMember.role}
            />
          ))} */}

          <p className={`${styles.text}`}>
            At Gladline Cleaning, excellence isn’t just a standard — it’s our
            culture. Our team is made up of dependable, detail‑driven
            professionals who take pride in creating clean, orderly spaces that
            support your life and work. Clients trust us because we show up on
            time, communicate clearly, and deliver the same high level of
            quality every single visit. Our cleaners are trained to notice the
            details that matter. Whether it’s a family home or a busy office,
            the Gladline team works with care, respect, and consistency. We
            don’t rush. We don’t cut corners. We honor your space as if it were
            our own.
          </p>
          <p className={`${styles.text}`}>
            What sets our team apart is simple: reliability, excellence, and
            genuine care. From punctual arrivals to thorough cleaning routines,
            we make sure every space feels refreshed, organized, and ready for
            whatever comes next. When you choose Gladline, you’re choosing a
            team that values your time, your environment, and your peace of
            mind. We’re here to make your day easier — one clean space at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamBlock;
