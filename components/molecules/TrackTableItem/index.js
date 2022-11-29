import { RiPlayLine, RiPauseLine } from "react-icons/ri";

import styles from "./styles.module.scss";
import { useAudio } from "@/lib/AudioContext";

import msToSecondsAndMinutes from "@/utils/msToSecondsAndMinutes";

function TrackTableItem({
  track,
  showArtistName = true,
  showAlbumName = true,
}) {
  const { currentTrack, setCurrentTrack, play, pause, isPlaying } = useAudio();

  const albumImage = track.album.images.length
    ? track.album.images[0].url
    : noPicture.src;

  const playTrack = () => {
    setCurrentTrack(track);
    play();
  };

  const isActiveTrack = () => {
    return currentTrack?.id === track.id;
  };

  return (
    <tr className={`${styles.trackItem} ${isActiveTrack() && styles.active}`}>
      <td>
        <span className={styles.playPauseWrapper}>
          {isActiveTrack() && isPlaying ? (
            <RiPauseLine onClick={() => pause()} className={styles.playPause} />
          ) : (
            <div
              className={`${styles.playWrapper} ${
                isActiveTrack() && styles.activePlaying
              }`}
            >
              <span>{track.number}</span>
              <RiPlayLine
                onClick={() => playTrack()}
                className={styles.playPause}
              />
            </div>
          )}
        </span>
      </td>
      <td>
        <div className={styles.trackName}>
          <img src={albumImage} />
          <span>{track.name}</span>
        </div>
      </td>
      {showArtistName && (
        <td>
          <span>{track.artists[0].name}</span>
        </td>
      )}
      {showAlbumName && (
        <td>
          <span>{track.album.name}</span>
        </td>
      )}
      <td>
        <span>{msToSecondsAndMinutes(track.duration_ms)}</span>
      </td>
    </tr>
  );
}

export default TrackTableItem;
