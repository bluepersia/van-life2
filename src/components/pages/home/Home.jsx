import Button from "../../shared/Button/Button";
import styles from "./header.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className={styles.body}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Button className={styles.button} to="vans">
          Find your van
        </Button>
      </div>
    </main>
  );
}
