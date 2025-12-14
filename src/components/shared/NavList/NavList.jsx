import { NavLink } from "react-router-dom";
import styles from "./navList.module.scss";

const activeLinkStyle = {
  textDecoration: "underline",
  fontWeight: "600",
  color: "rgba(22, 22, 22, 1)",
};

export default function NavList({ items, fontSize = "1rem" }) {
  const baseStyle = {
    fontSize,
  };
  return (
    <ul className={styles.navList}>
      {items.map((item) => (
        <li className={styles.navItem} key={item.name}>
          <NavLink
            to={item.to}
            end={item.end}
            style={({ isActive }) =>
              isActive ? { ...activeLinkStyle, ...baseStyle } : baseStyle
            }
            className={styles.navLink}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
