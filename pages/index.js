import styles from "../styles/Home.module.css";

import { SpotifyButton } from "components";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Next World</h1>
      <SpotifyButton />
    </div>
  );
}
