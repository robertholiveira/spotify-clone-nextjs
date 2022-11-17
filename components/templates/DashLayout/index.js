import { Sidebar, Player } from "@/components";

import styles from "./styles.module.scss";
import { AudioProvider } from "@/lib/AudioContext";

function DashLayout({ children }) {
  return (
    <>
      <AudioProvider>
        <div className={styles.dashLayout}>
          <Sidebar />
          <div className={styles.content}>{children}</div>
        </div>
        <Player />
      </AudioProvider>
    </>
  );
}

export default DashLayout;
