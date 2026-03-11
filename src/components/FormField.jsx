function FormField({ label, id, children }) {
  return (
    <div className={`formGroup`}>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

export default FormField;
