import TrackTableItem from "@/components/molecules/TrackTableItem";
import Title from "@/components/atoms/Title";

import styles from "./styles.module.scss";

function TrackTable({
  tracks,
  title,
  showHeader = true,
  showArtistName = true,
  showAlbumName = true,
}) {
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
                <th>Nome</th>
                {showArtistName && <th>Artista</th>}
                {showAlbumName && <th>Álbum</th>}
                <th>Duração</th>
              </tr>
            </thead>
          )}
          <tbody>
            {tracks.map((track, index) => (
              <TrackTableItem
                track={track}
                showArtistName={showArtistName}
                showAlbumName={showAlbumName}
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
