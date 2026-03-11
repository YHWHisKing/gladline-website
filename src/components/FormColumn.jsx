import styles from "./FormColumn.module.css";

function FormColumn({ title, children }) {
  return (
    <div className={`${styles.formColumn} ${styles.submitColumn}`}>
      <h2 className={`${styles.title}`}>{title}</h2>
      {children}
    </div>
  );
}

export default FormColumn;
