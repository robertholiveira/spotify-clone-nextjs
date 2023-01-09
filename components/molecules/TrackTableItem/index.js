import Image from "next/image";

import { RiPlayLine, RiPauseLine } from "react-icons/ri";

import { useAudio } from "@/lib/AudioContext";

import msToSecondsAndMinutes from "@/utils/msToSecondsAndMinutes";
import noPicture from "public/images/no-picture-artist.jpg";
import styles from "./styles.module.scss";

function TrackTableItem({
  track,
  showArtistName = true,
  showAlbumName = true,
  showAlbumImage = true,
}) {
  const { handlePause, isPlaying, isActiveTrack, playTrack } = useAudio();

  const albumImage =
    showAlbumImage && track.album && track.album.images.length
      ? track.album.images[0].url
      : noPicture.src;

  return (
    <tr className={`${styles.trackItem} ${isActiveTrack() && styles.active}`}>
      <td>
        <span className={styles.playPauseWrapper}>
          {isActiveTrack(track) && isPlaying ? (
            <RiPauseLine onClick={handlePause} className={styles.playPause} />
          ) : (
            <div
              className={`${styles.playWrapper} ${
                isActiveTrack(track) && styles.activePlaying
              }`}
            >
              <span>{track.number}</span>
              <RiPlayLine
                onClick={() => playTrack(track)}
                className={styles.playPause}
              />
            </div>
          )}
        </span>
      </td>
      <td>
        <div className={styles.trackName}>
          {showAlbumImage && (
            <Image width={200} height={200} src={albumImage} />
          )}
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
          <span>{track.album?.name}</span>
        </td>
      )}
      <td>
        <span>{msToSecondsAndMinutes(track.duration_ms)}</span>
      </td>
    </tr>
  );
}

export default TrackTableItem;
