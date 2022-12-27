import {
  RiPlayCircleFill,
  RiPauseCircleFill,
  RiVolumeMuteLine,
  RiVolumeDownLine,
  RiVolumeUpLine,
} from "react-icons/ri";

import secondsToMinAndSeconds from "@/utils/secondsToMinAndSeconds";
import { useAudio } from "@/lib/AudioContext";

import RangeSlider from "@/components/atoms/RangeSlider";

import styles from "./styles.module.scss";

function Player() {
  const {
    currentTrack,
    handlePlay,
    handlePause,
    currentTime,
    setCurrentTime,
    changePlayerCurrentTime,
    volume,
    setVolume,
    isPlaying,
    duration,
  } = useAudio();

  const handleCurrentTime = (e) => {
    setCurrentTime(e.target.value);
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const VolumeIcon = () => {
    if (volume == 0) return <RiVolumeMuteLine />;
    if (volume <= 0.5) return <RiVolumeDownLine />;
    if (volume >= 0.5) return <RiVolumeUpLine />;
  };

  return (
    <div className={`${styles.player} ${currentTrack && styles.active}`}>
      <div className={styles.trackInfo}>
        <span className={styles.trackName}>{currentTrack?.name}</span>
        <span className={styles.artistName}>
          {currentTrack?.artists[0].name}
        </span>
      </div>

      <div className={styles.controls}>
        <button className={styles.playPause}>
          {isPlaying ? (
            <RiPauseCircleFill onClick={handlePause} />
          ) : (
            <RiPlayCircleFill onClick={handlePlay} />
          )}
        </button>
        <div className={styles.range}>
          <span>{secondsToMinAndSeconds(currentTime)}</span>
          <RangeSlider
            min={0}
            max={duration}
            onChange={handleCurrentTime}
            onMouseUp={changePlayerCurrentTime}
            value={currentTime}
            className={styles.rangeTime}
          />
          <span>{secondsToMinAndSeconds(duration)}</span>
        </div>
      </div>
      <div className={styles.volume}>
        <VolumeIcon />
        <RangeSlider
          min={0}
          max={1}
          onChange={handleVolume}
          value={volume}
          className={styles.rangeVolume}
        />
      </div>
    </div>
  );
}

export default Player;
