import Button from "../../components/Button";
import ContactForm from "../../components/ContactForm";
import styles from "./FormBlock.module.css";

function FormBlock() {
  return (
    <section className={`block`}>
      <ContactForm />
    </section>
  );
}

export default FormBlock;
