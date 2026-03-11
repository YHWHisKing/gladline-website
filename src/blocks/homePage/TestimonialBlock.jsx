import Testimonial from "../../components/Testimonial";
import { testamonies } from "../../../data/testamonies.json";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

import styles from "./TestimonialBlock.module.css";
import { useState } from "react";

function TestimonialBlock() {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    setSlide((slide) => (slide === testamonies.length - 1 ? 0 : slide + 1));
  }
  function previousSlide() {
    setSlide((slide) => (slide === 0 ? testamonies.length - 1 : slide - 1));
  }

  return (
    <section className={styles.container}>
      <div
        className={`block restrictContent ${styles.block} ${styles.testimonialBlock} ${styles.carousel}`}
      >
        <IoChevronBackCircleOutline
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={previousSlide}
        />
        {testamonies.map((testimony, i) => (
          <Testimonial
            className={
              slide === i
                ? `${styles.slide} `
                : `${styles.slide} ${styles.slideHidden}`
            }
            text={testimony.testimony}
            author={testimony.author}
            key={i}
          />
        ))}
        <IoChevronForwardCircleOutline
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={nextSlide}
        />
        <span className={`${styles.indicators}`}>
          {testamonies.map((_, i) => (
            <button
              className={
                slide === i
                  ? `${styles.indicator} `
                  : `${styles.indicator} ${styles.indicatorInactive}`
              }
              key={i}
              onClick={() => setSlide(i)}
            ></button>
          ))}
        </span>
      </div>
    </section>
  );
}

export default TestimonialBlock;
