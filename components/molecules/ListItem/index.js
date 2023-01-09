import { RiPauseMiniFill, RiPlayMiniFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

import { useAudio } from "@/lib/AudioContext";

import styles from "./styles.module.scss";

function ListItem({
  image,
  link,
  title,
  subTitle,
  circleImage,
  trackToPlay,
  limitedText = false,
}) {
  const { handlePause, isPlaying, isActiveTrack, playTrack } = useAudio();

  const onClickPlay = (e) => {
    e.preventDefault();
    playTrack(trackToPlay);
  };

  const onClickPause = (e) => {
    e.preventDefault();
    handlePause();
  };

  return (
    <div className={styles.listItemWrapper}>
      <Link href={link} passHref>
        <div className={styles.imageContainer}>
          <Image
            width={400}
            height={400}
            src={image}
            className={circleImage ? styles.circle : undefined}
          />

          {isActiveTrack(trackToPlay) && isPlaying ? (
            <RiPauseMiniFill
              onClick={onClickPause}
              className={styles.playPause}
            />
          ) : (
            <div
              className={`${styles.playWrapper} ${
                isActiveTrack(trackToPlay) && styles.activePlaying
              }`}
            >
              <RiPlayMiniFill
                onClick={onClickPlay}
                className={styles.playPause}
              />
            </div>
          )}
        </div>
        <span
          className={`${styles.title} ${limitedText ? styles.limited : ""}`}
        >
          {title}
        </span>
        {subTitle && (
          <span
            className={`${styles.subTitle} ${
              limitedText ? styles.limited : ""
            }`}
          >
            {subTitle}
          </span>
        )}
      </Link>
    </div>
  );
}

export default ListItem;
