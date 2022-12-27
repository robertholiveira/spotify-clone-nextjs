import { AudioProvider } from "@/lib/AudioContext";
import { ColorProvider } from "@/lib/ColorContext";

import Sidebar from "@/components/organisms/Sidebar";
import Player from "@/components/organisms/Player";

import styles from "./styles.module.scss";

function DashLayout({ children }) {
  return (
    <>
      <AudioProvider>
        <div className={styles.dashLayout}>
          <Sidebar />
          <ColorProvider>
            <div className={styles.content}>{children}</div>
          </ColorProvider>
        </div>
        <Player />
      </AudioProvider>
    </>
  );
}

export default DashLayout;
