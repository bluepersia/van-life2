import { Link } from "react-router-dom";
import Badge from "../../shared/Badge/Badge";
import styles from "./van.module.scss";

export default function Van({ van, state }) {
  return (
    <article className={styles.van}>
      <Link to={`/vans/${van.id}`} state={state} className={styles.vanLink}>
        <img className={styles.img} alt="" src={van.imageUrl} />
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h3 className={styles.name}>{van.name}</h3>
            <Badge variant={van.type}>{van.type}</Badge>
          </div>
          <span className={styles.price}>
            $60<span className={styles.priceText}>/day</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
