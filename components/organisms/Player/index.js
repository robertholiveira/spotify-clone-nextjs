import { useState, useEffect } from "react";
import { useAudio } from "@/lib/AudioContext";

import styles from "./styles.module.scss";

function Player() {
  const { currentTrack, play, pause } = useAudio();

  return (
    <div className={styles.player}>
      <span>{currentTrack?.name}</span>
      <br />
      <button onClick={() => play()}>Play</button>
      <br />
      <button onClick={() => pause()}>Pause</button>
    </div>
  );
}

export default Player;
