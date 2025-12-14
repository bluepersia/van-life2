import { useQuery } from "@tanstack/react-query";
import styles from "./vans.module.scss";
import { getHostVans } from "../../../js/api";
import { Link } from "react-router-dom";

export default function Vans() {
  const { isPending, error, data } = useQuery({
    queryFn: getHostVans,
    queryKey: ["hostVans"],
  });

  const errMsg = error?.message || "";

  return (
    <div className={styles.vans}>
      {isPending ? (
        <h1>Loading...</h1>
      ) : errMsg ? (
        <h1 className={styles.error}>{errMsg}</h1>
      ) : (
        <>
          <h1 className={styles.title}>Your listed vans</h1>
          <ul className={styles.list}>
            {data.vans.map((van) => (
              <li className={styles.vanItem} key={van.id}>
                <article className={styles.van}>
                  <Link className={styles.link} to={van.id}>
                    <img className={styles.vanImg} alt="" src={van.imageUrl} />
                    <div className={styles.content}>
                      <h2 className={styles.name}>{van.name}</h2>
                      <span className={styles.price}>${van.price}/day</span>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
