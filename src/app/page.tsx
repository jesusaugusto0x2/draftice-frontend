import styles from "./page.module.scss";
import { fredoka } from "@/utils/fonts";

const Home = () => (
  <main className={fredoka.className}>
    <div className={styles.Home}>
      <h1>Draftice</h1>
      <h3>Soon you will be able to improve your drafting in DOTA 2!</h3>
    </div>
  </main>
);

export default Home;
