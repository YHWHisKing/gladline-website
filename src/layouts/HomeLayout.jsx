import { Outlet, useLocation } from "react-router";

import NavBanner from "../components/NavBanner";
import BannerButton from "../components/BannerButton";
import Footer from "../components/Footer";

import styles from "./HomeLayout.module.css";
import BackToTopButton from "../components/BackToTopButton";

import { motion } from "framer-motion";

function HomeLayout() {
  const location = useLocation();

  return (
    <>
      <NavBanner>
        <h1 className={styles.bannerHeading}>Gladline Cleaning</h1>
        <h2 className={styles.bannerSubHeading}>
          Clean spaces make Happy places
        </h2>
        <p className={`${styles.bannerText}`}>
          Where your comfort comes first.
        </p>
        <BannerButton to="contact" className={`${styles.bannerBtn}`} />
      </NavBanner>
      {/* Adding animation */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1 }}
      >
        <Outlet />

        <BackToTopButton />
        <Footer />
      </motion.div>
    </>
  );
}

export default HomeLayout;
