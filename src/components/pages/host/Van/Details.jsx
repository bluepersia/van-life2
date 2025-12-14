import { useOutletContext } from "react-router-dom";
import styles from "./details.module.scss";

export default function HostVanDetails() {
  const van = useOutletContext();

  return (
    <section className={styles.details}>
      <span className={styles.key}>
        Name:<span className={styles.value}>{van.name}</span>
      </span>

      <span className={styles.key}>
        Category:<span className={styles.value}>{van.type}</span>
      </span>

      <span className={styles.key}>
        Description:<span className={styles.value}>{van.description}</span>
      </span>

      <span className={styles.key}>
        Visibility:<span className={styles.value}>Public</span>
      </span>
    </section>
  );
}
