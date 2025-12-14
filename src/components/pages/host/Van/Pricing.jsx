import { useOutletContext } from "react-router-dom";
import styles from "./pricing.module.scss";

export default function HostVanPricing() {
  const van = useOutletContext();

  return (
    <span className={styles.price}>
      ${van.price}
      <span className={styles.priceText}>/day</span>
    </span>
  );
}
