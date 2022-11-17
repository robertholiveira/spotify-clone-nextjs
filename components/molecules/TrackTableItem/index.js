import { RiPlayLine, RiPauseLine } from "react-icons/ri";

import styles from "./styles.module.scss";
import { useAudio } from "@/lib/AudioContext";

import msToSecondsAndMinutes from "@/utils/msToSecondsAndMinutes";

function TrackTableItem({ track }) {
  const { currentTrack, pause, isPlaying } = useAudio();

  const playTrack = () => {
    setCurrentTrack(track);
  };

  const isActiveTrack = () => {
    return currentTrack?.id === track.id;
  };

  return (
    <tr className={`${styles.trackItem} ${isActiveTrack() && styles.active}`}>
      <td>
        <span>
          {isActiveTrack() && isPlaying ? (
            <RiPauseLine onClick={() => pause()} className={styles.playPause} />
          ) : (
            <RiPlayLine
              onClick={() => playTrack()}
              className={styles.playPause}
            />
          )}
        </span>
      </td>
      <td>
        <span>{track.name}</span>
      </td>
      <td>
        <span>{track.artists[0].name}</span>
      </td>
      <td>
        <span>{track.album.name}</span>
      </td>
      <td>
        <span>{msToSecondsAndMinutes(track.duration_ms)}</span>
      </td>
    </tr>
  );
}

export default TrackTableItem;
