import styles from "./back-btn.module.css";

import { Link } from "react-router-dom";
import arrowImg from "/src/assets/arrow.png";
export default function BackBtn({ children, to }) {
  return (
    <Link to={to || ".."} relative="path" className={styles.backBtn}>
      <img src={arrowImg} alt="" className={styles.img} />
      {children}
    </Link>
  );
}
