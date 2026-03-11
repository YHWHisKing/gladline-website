import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import NavBanner from "../components/NavBanner";
import Footer from "../components/Footer";
import styles from "./InnerLayout.module.css";
import BackToTopButton from "../components/BackToTopButton";

function InnerLayout() {
  const location = useLocation();

  return (
    <>
      <NavBanner>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
        >
          <h1 className={`${styles.heading}`}>
            {location.pathname === "/about" && "about us"}
          </h1>
          <h1 className={`${styles.heading}`}>
            {location.pathname === "/services" && "our services"}
          </h1>
          <h1 className={`${styles.heading}`}>
            {location.pathname === "/contact" && "contact"}
          </h1>
        </motion.div>
      </NavBanner>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.2 }}
      >
        <Outlet />

        <BackToTopButton />

        <Footer />
      </motion.div>
    </>
  );
}

export default InnerLayout;
