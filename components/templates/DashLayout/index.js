import { AudioProvider } from "@/lib/AudioContext";

import Sidebar from "@/components/organisms/Sidebar";
import Player from "@/components/organisms/Player";

import styles from "./styles.module.scss";

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
