import ContactTag from "../../components/ContactTag";
import photo from "../../assets/Images/getInTouch.webp";

import { FaRegBuilding, FaPhoneVolume } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

import styles from "./GetInTouchBlock.module.css";

function GetInTouchBlock() {
  return (
    <section className={`block`}>
      <div
        className={`restrictContent ${styles.grid} gri2Cols`}
        data-aos="fade-right"
      >
        <div className={styles.left}>
          <div className={`${styles.contactInfo}`}>
            <h2 className={styles.heading}>Get in Touch</h2>
            <ContactTag
              icon={FaRegBuilding}
              heading="Contact Us"
              text="4760 Preston Rd. Suite 244-134 Frisco Texas, 75034"
            />
            <ContactTag
              icon={FaPhoneVolume}
              heading="Text/Call Us"
              text="469-279-7927"
            />
            <ContactTag
              icon={MdMailOutline}
              heading="Email Us"
              text="Gladlinecleaning2020@gmail.com"
            />
          </div>
        </div>

        <div className={styles.right} data-aos="fade-left" data-aos-delay="100">
          <img className={`${styles.img}`} src={photo} alt="Get in Touch" />
        </div>
      </div>
    </section>
  );
}

export default GetInTouchBlock;
