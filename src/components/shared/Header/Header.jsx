import { Link } from "react-router-dom";
import NavList from "../NavList/NavList";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to=".">
          #VANLIFE
        </Link>
        <NavList
          items={[
            {
              name: "Host",
              to: "host",
            },
            {
              name: "About",
              to: "about",
            },
            {
              name: "Vans",
              to: "vans",
            },
          ]}
        />
      </nav>
    </header>
  );
}
