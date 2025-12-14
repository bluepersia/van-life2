import { Outlet } from "react-router-dom";
import NavList from "../../shared/NavList/NavList";
import styles from "./host.module.scss";

export default function Host() {
  return (
    <main className={styles.host}>
      <nav>
        <NavList
          items={[
            { name: "Dashboard", to: ".", end: true },
            { name: "Income", to: "income" },
            { name: "Vans", to: "vans" },
            { name: "Reviews", to: "reviews" },
          ]}
        />
      </nav>
      <Outlet />
    </main>
  );
}
