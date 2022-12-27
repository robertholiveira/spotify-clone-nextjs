import useTranslation from "next-translate/useTranslation";

import TrackTableItem from "@/components/molecules/TrackTableItem";
import Title from "@/components/atoms/Title";

import styles from "./styles.module.scss";

function TrackTable({
  tracks,
  title,
  showHeader = true,
  showArtistName = true,
  showAlbumName = true,
  showAlbumImage = true,
}) {
  const { t } = useTranslation("common");

  const hasTracks = tracks && tracks.length > 0;

  return (
    hasTracks && (
      <>
        <Title>{title}</Title>
        <table className={styles.trackTable}>
          {showHeader && (
            <thead align="left">
              <tr>
                <th></th>
                <th>{t("trackTable.name")}</th>
                {showArtistName && <th>{t("trackTable.artist")}</th>}
                {showAlbumName && <th>{t("trackTable.album")}</th>}
                <th>{t("trackTable.duration")}</th>
              </tr>
            </thead>
          )}
          <tbody>
            {tracks.map((track, index) => (
              <TrackTableItem
                track={track}
                showArtistName={showArtistName}
                showAlbumName={showAlbumName}
                showAlbumImage={showAlbumImage}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </>
    )
  );
}

export default TrackTable;
