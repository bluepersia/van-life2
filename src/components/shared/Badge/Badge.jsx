import clsx from "clsx";
import styles from "./badge.module.scss";

export default function Badge({ children, variant }) {
  const classes = clsx(styles.badge, styles[`badge--${variant}`]);
  return <span className={classes}>{children}</span>;
}
