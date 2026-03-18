import Testimonial from "../../components/Testimonial";
import { testamonies } from "../../../data/testamonies.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

import styles from "./TestimonialBlock.module.css";

function TestimonialBlock() {
  return (
    <section className={styles.container}>
      <div
        className={`block restrictContent ${styles.block} ${styles.testimonialBlock} ${styles.swiper} `}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          speed={600}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {testamonies.map((testimony, i) => (
            <SwiperSlide key={i}>
              <Testimonial
                text={testimony.testimony}
                author={testimony.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialBlock;
