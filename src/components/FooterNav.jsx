import { NavLink } from "react-router";
import styles from "./FooterNav.module.css";

function FooterNav() {
  return (
    <>
      <h3 className={`${styles.heading}`}>Quick Menu</h3>

      <ul className={`${styles.nav}`}>
        {/* each link uses the same callback; destructure isActive from the argument */}
        <li className={styles.navLink}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Services
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default FooterNav;
