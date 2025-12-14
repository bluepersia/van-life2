import styles from "./van-detail.module.scss";

import BackBtn from "../../shared/BackBtn/BackBtn";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVan } from "../../../js/api";
import Badge from "../../shared/Badge/Badge";
import Button from "../../shared/Button/Button";

export default function VanDetail() {
  const { id } = useParams();
  const location = useLocation();

  const { isFetching, error, data } = useQuery({
    queryFn: async () => getVan(id),
    queryKey: ["van"],
  });

  const errMsg = error ? error.message : "";
  const van = data?.vans;
  const type = location.state?.type || "all";
  const searchParams = location.state?.search || "";
  return (
    <main className={styles.vanDetail}>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : errMsg ? (
        <h1 className={styles.error}>{errMsg}</h1>
      ) : (
        <>
          <BackBtn to={`..?${searchParams}`}>Back to {type} vans</BackBtn>

          <article className={styles.van}>
            <img className={styles.img} alt="" src={van.imageUrl} />
            <Badge variant={van.type} className={styles.badge}>
              {van.type}
            </Badge>
            <h1 className={styles.name}>{van.name}</h1>
            <span className={styles.price}>
              ${van.price}
              <span className={styles.priceText}>/day</span>
            </span>
            <p className={styles.body}>{van.description}</p>
            <Button to="." color="orange" className={styles.button}>
              Rent this van
            </Button>
          </article>
        </>
      )}
    </main>
  );
}
