import clsx from "clsx";
import styles from "./button.module.css";

export default function Button({
  children,
  onClick,
  className,
  color = "orange",
}) {
  const classes = clsx(styles.button, className, styles[`button--${color}`]);
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
