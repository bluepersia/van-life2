import clsx from "clsx";
import styles from "./button.module.scss";
import { Link } from "react-router-dom";

export default function Button({
  children,
  onClick,
  className,
  color = "orange",
  to,
}) {
  const classes = clsx(styles.button, className, styles[`button--${color}`]);

  const type = onClick ? "button" : to ? "link" : null;

  if (!type) throw Error("Button must have 'onClick' or 'to' prop");

  return type === "button" ? (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  ) : type === "link" ? (
    <Link className={classes} to={to}>
      {children}
    </Link>
  ) : null;
}
