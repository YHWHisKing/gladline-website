import { Link, useLocation } from "react-router";
import styles from "./Logo.module.css";
import colourLogo from "../assets/Images/NavLogoColour.png";
import whiteLogo from "../assets/Images/NavLogoWhite.png";

function Logo() {
  const { pathname } = useLocation();

  return (
    <Link to="/">
      <img
        src={pathname === "/" ? colourLogo : whiteLogo}
        alt="NavLogoColour"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
