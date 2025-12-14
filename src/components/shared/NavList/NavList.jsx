import { NavLink } from "react-router-dom";
import { navList, navItem, navLink } from "./navList.module.css";

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
    <ul className={navList}>
      {items.map((item) => (
        <li className={navItem} key={item.name}>
          <NavLink
            to={item.to}
            style={({ isActive }) =>
              isActive ? { ...activeLinkStyle, ...baseStyle } : baseStyle
            }
            className={navLink}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
