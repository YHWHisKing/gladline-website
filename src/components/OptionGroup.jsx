import styles from "./OptionGroup.module.css";

function OptionGroup({
  legend,
  name,
  options,
  type = "checkbox",
  register,

  error,
}) {
  return (
    <fieldset className={`formGroup selectionGroup`}>
      <legend className={`${styles.checkboxTitle}`}>{legend}</legend>

      {options.map((option) => (
        <label key={option}>
          <input {...register(name)} value={option} type={type} /> {option}
        </label>
      ))}
      {error && <p className={`${styles.error}`}>{error.message}</p>}
    </fieldset>
  );
}

export default OptionGroup;
