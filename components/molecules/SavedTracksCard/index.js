import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import numberWithDots from "@/utils/numberWithDots";

import styles from "./styles.module.scss";

function SavedTracksCard({ tracks }) {
  const { t } = useTranslation("collection.playlists");

  const renderTextTracks = () => {
    return tracks.items.map((track) => {
      return (
        <span key={track.id}>
          <span className={styles.artist}>{track.artists[0].name} </span>
          <span className={styles.track}>{track.name} • </span>
        </span>
      );
    });
  };
  return (
    <Link
      href="/dashboard/collection/tracks"
      className={styles.savedTracksCard}
    >
      <span className={styles.tracksText}>{renderTextTracks()}</span>
      <div>
        <span className={styles.title}>{t("likedSongs")}</span>
        <span className={styles.total}>
          {numberWithDots(tracks.total)} {t("countSongs")}
        </span>
      </div>
    </Link>
  );
}

export default SavedTracksCard;
