import styles from "./TeamMember.module.css";

function TeamMember({ image, memberName, role }) {
  return (
    <div className={`${styles.teamMember}`}>
      <img
        className={`${styles.memberimage}`}
        src={image}
        alt="Image of the Co-Founder"
      />
      <h3 className={`${styles.memberName}`}>{memberName}</h3>
      <p className={`${styles.memberRole}`}>{role}</p>
    </div>
  );
}

export default TeamMember;
