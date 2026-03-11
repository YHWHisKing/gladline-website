import { Link } from "react-router";
import styles from "./Button.module.css";

function Button({
  variant,
  htmlType = "button",
  children,
  to,
  className,
  isSubmitting,
  onClick,
}) {
  if (to)
    return (
      <Link to={to} className={`${styles.btn} ${styles[variant]} ${className}`}>
        {children}
      </Link>
    );

  return (
    <button
      onClick={onClick}
      disabled={isSubmitting}
      type={htmlType}
      className={`${styles.btn} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
