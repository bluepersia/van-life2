import { useQuery } from "@tanstack/react-query";
import { getVan } from "../../../../js/api";
import { Outlet, useParams } from "react-router-dom";
import styles from "./van-detail.module.scss";
import BackBtn from "../../../shared/BackBtn/BackBtn";
import NavList from "../../../shared/NavList/NavList";
import Badge from "../../../shared/Badge/Badge";

export default function HostVanDetail() {
  const { id } = useParams();

  const { isFetching, error, data } = useQuery({
    queryFn: async () => getVan(id),
    queryKey: ["hostVanDetail"],
  });

  const errMsg = error?.message || "";
  const van = data?.vans;

  return (
    <main className={styles.vanDetail}>
      <BackBtn>Back to all vans</BackBtn>;
      {isFetching ? (
        <h1>Loading...</h1>
      ) : errMsg ? (
        <h1 className={styles.error}>{errMsg}</h1>
      ) : (
        <article className={styles.van}>
          <header className={styles.header}>
            <img className={styles.img} alt="" src={van.imageUrl} />
            <div className={styles.info}>
              <Badge className={styles.badge} variant={van.type}>
                {van.type}
              </Badge>
              <h1 className={styles.name}>{van.name}</h1>
              <span className={styles.price}>
                ${van.price}
                <span className={styles.priceText}>/day</span>
              </span>
            </div>
          </header>
          <nav className={styles.nav}>
            <NavList
              items={[
                {
                  name: "Details",
                  to: ".",
                  end: true,
                },
                {
                  name: "Pricing",
                  to: "pricing",
                },
                {
                  name: "Photos",
                  to: "photos",
                },
              ]}
            />
          </nav>
          <Outlet context={van} />
        </article>
      )}
    </main>
  );
}
