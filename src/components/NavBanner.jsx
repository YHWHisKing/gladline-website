import { Link, NavLink, useLocation } from "react-router";
import { useEffect } from "react";
import AOS from "aos";

import NavBar from "./NavBar";
import { bannerImages } from "../helpers/bannerImages";

import styles from "./NavBanner.module.css";

function NavBanner({ children }) {
  const { pathname } = useLocation();

  const bannerImage = bannerImages[pathname] || bannerImages["/"];

  // In NavBanner.jsx
  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return (
    <header
      style={{ backgroundImage: `url(${bannerImage})` }}
      className={`${pathname === "/" ? styles.homeBanner : styles.innerBanner} ${styles.overlay}`}
    >
      <NavBar />
      <div className={styles.container}>
        <div className={styles.hero} data-aos="fade-up" data-aos-once="false">
          {children}
        </div>
      </div>
    </header>
  );
}

export default NavBanner;
