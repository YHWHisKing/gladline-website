import { Link } from "react-router";
import styles from "./BannerButton.module.css";
import { FaChevronRight } from "react-icons/fa6";

function BannerButton({ className, to }) {
  if (to)
    return (
      <Link to={to} className={`${styles.btn}  ${className}`}>
        Get a Quote <FaChevronRight />
      </Link>
    );

  return (
    <button className={`${styles.btn} ${className}`}>
      Get a Quote <FaChevronRight />
    </button>
  );
}

export default BannerButton;
