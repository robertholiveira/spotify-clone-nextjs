import { useAudio } from "@/lib/AudioContext";

import styles from "./styles.module.scss";

function Player() {
  const { currentTrack, play, pause } = useAudio();

  return (
    <div className={`${styles.player} ${currentTrack && styles.active}`}>
      <span>{currentTrack?.name}</span>
      <br />
      <button onClick={() => play()}>Play</button>
      <br />
      <button onClick={() => pause()}>Pause</button>
    </div>
  );
}

export default Player;
