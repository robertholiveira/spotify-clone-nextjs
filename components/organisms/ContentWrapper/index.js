import { useAudio } from "@/lib/AudioContext";
import { useColor } from "@/lib/ColorContext";

import styles from "./styles.module.scss";

function ContentWrapper({ children, addBackgroundColor = false }) {
  const { currentTrack } = useAudio();
  const { predominantColor } = useColor();

  return (
    <div
      className={`${styles.contentWrapper} ${currentTrack && styles.isPlaying}`}
      style={
        addBackgroundColor
          ? {
              background: `linear-gradient(0deg, transparent 70%, ${predominantColor} 100%)`,
            }
          : {}
      }
    >
      {children}
    </div>
  );
}

export default ContentWrapper;
