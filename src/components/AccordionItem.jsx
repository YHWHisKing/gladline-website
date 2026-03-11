import { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

import styles from "./AccordionItem.module.css";

function AccordionItem({ num, title, text, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`${styles.item} ${isOpen ? styles.open : ""}`}
      onClick={handleToggle}
    >
      <div className={styles.itemLayout}>
        <h3 className={styles.title}>{title}</h3>{" "}
        <span className={styles.icon}>
          {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
        </span>
      </div>
      <div
        className={`${styles.contentBox} ${isOpen ? styles.contentOpen : styles.contentClosed}`}
      >
        {text}
      </div>
    </div>
  );
}

export default AccordionItem;
