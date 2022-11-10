import { TrackTableItem, Title } from "@/components";
import styles from "./styles.module.scss";

function TrackTable({ tracks, title }) {
  const hasTracks = tracks && tracks.length > 0;

  return (
    hasTracks && (
      <>
        <Title>{title}</Title>
        <table className={styles.trackTable}>
          <thead align="left">
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track, index) => (
              <TrackTableItem track={track} key={index} />
            ))}
          </tbody>
        </table>
      </>
    )
  );
}

export default TrackTable;
