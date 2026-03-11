import { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

const faqs = [
  {
    title: "What cleaning products do you use?",
    text: "We use high-quality, industry-approved cleaning products that are safe for your home or office.",
  },
  {
    title: "Do you offer eco-friendly cleaning options?",
    text: "Yes, we offer eco-friendly cleaning options upon request to accommodate your preferences.",
  },
  {
    title: "How do I schedule a cleaning appointment?",
    text: "You can easily schedule a cleaning appointment by contacting us via phone, email, or by filling the form on our Contact page.",
  },
];

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div data-aos="fade-left" className={styles.accordion}>
      {faqs.map((question, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={question.title}
          text={question.text}
          key={question.title}
        />
      ))}
    </div>
  );
}

export default Accordion;
