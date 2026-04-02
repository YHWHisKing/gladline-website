import { useState } from "react";
import { NavLink } from "react-router";

import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

import styles from "./NavBar.module.css";
import Logo from "./Logo";
import Button from "./Button";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <Logo />

        <button
          className={styles.openButton}
          aria-label="open sidebar"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <FiMenu color="white" size={"2em"} />
        </button>
        <div
          className={`${styles.navRight} ${open ? styles.show : ""}`}
          aria-hidden={!open}
        >
          <ul onClick={() => setOpen(false)}>
            <li>
              <button
                className={styles.closeButton}
                aria-label="close sidebar"
                onClick={() => setOpen(false)}
              >
                <MdOutlineClose color="grey" size={"2em"} />
              </button>
            </li>
            <li className={styles.homeLi}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          {!open && (
            <Button
              to="contact"
              className={`${styles.navBtn}`}
              variant="accent"
            >
              Get a Quote
            </Button>
          )}
        </div>
      </nav>

      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default NavBar;
