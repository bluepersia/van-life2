import { useOutletContext } from "react-router-dom";
import styles from "./photos.module.scss";

export default function HostVanPhotos() {
  const van = useOutletContext();

  return (
    <section className={styles.photos}>
      <img className={styles.photo} alt="" src={van.imageUrl} />
    </section>
  );
}
