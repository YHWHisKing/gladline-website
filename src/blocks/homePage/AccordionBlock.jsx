import Accordion from "../../components/Accordion";
import styles from "./AccordionBlock.module.css";

function AccordionBlock() {
  return (
    <section>
      <div className={`block grid gridCols2 restrictContent`}>
        <div data-aos="fade-right" className={styles.content}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.contentText}>
            Some questions we get asked often are:
          </p>
        </div>
        <Accordion />
      </div>
    </section>
  );
}

export default AccordionBlock;
