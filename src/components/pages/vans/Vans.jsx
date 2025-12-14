import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getVans } from "../../../js/api";
import styles from "./vans.module.scss";
import Van from "./Van";
import { updateSearchParams } from "../../../js/searchParams";

export default function Vans() {
  const { isPending, error, data } = useQuery({
    queryKey: ["vans"],
    queryFn: getVans,
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const errMsg = error ? error.message : "";

  const typeFilter = searchParams.get("type");

  function updateSearchParam(key, value) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      return updateSearchParams(next, key, value);
    });
  }

  const vans = typeFilter
    ? data?.vans.filter((van) => van.type === typeFilter)
    : data?.vans;

  return (
    <main className={styles.vans}>
      <header className={styles.header}>
        <h1 className={styles.title}>Explore our van options</h1>
        <ul className={styles.options}>
          <li className={styles.optionItem}>
            <button
              className={`${styles.optionBtn} ${styles["optionBtn--simple"]}`}
              onClick={() => updateSearchParam("type", "simple")}
            >
              Simple
            </button>
          </li>
          <li className={styles.optionItem}>
            <button
              className={`${styles.optionBtn} ${styles["optionBtn--luxury"]}`}
              onClick={() => updateSearchParam("type", "luxury")}
            >
              Luxury
            </button>
          </li>
          <li className={styles.optionItem}>
            <button
              className={`${styles.optionBtn} ${styles["optionBtn--rugged"]}`}
              onClick={() => updateSearchParam("type", "rugged")}
            >
              Rugged
            </button>
          </li>
          <li className={styles.optionItem}>
            <button
              className={styles.clearBtn}
              onClick={() => updateSearchParam("type", null)}
            >
              Clear filters
            </button>
          </li>
        </ul>
      </header>

      <section className={styles.vansContent}>
        <h2 className="sr-only"></h2>
        {isPending ? (
          <h2>Loading...</h2>
        ) : errMsg ? (
          <h2 className={styles.error}>{errMsg}</h2>
        ) : (
          <ul className={styles.vansList}>
            {vans.map((van) => (
              <li key={van.id} className={styles.vanItem}>
                <Van van={van} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
