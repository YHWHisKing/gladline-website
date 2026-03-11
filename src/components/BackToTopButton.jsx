import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTopButton.module.css";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when user scrolls down past navbar (roughly ~500px threshold)
  const handleScroll = () => {
    setIsVisible(window.scrollY > 500);
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={styles.button}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
}

export default BackToTopButton;
