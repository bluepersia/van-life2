import clsx from "clsx";
import styles from "./badge.module.scss";

export default function Badge({ children, variant, className }) {
  const classes = clsx(styles.badge, styles[`badge--${variant}`], className);
  return <span className={classes}>{children}</span>;
}
