import styles from "./about.module.scss";
import imgSrc from "../../assets/about.png";
import Button from "../shared/Button/Button";

export default function About() {
  return (
    <main className={styles.about}>
      <img className={styles.img} src={imgSrc} alt="" />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className={styles.body}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Button color="black" to="/vans">
            Explore our vans
          </Button>
        </div>
      </div>
    </main>
  );
}
