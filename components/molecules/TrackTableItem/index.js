import { RiPlayLine } from "react-icons/ri";

import styles from "./styles.module.scss";

import msToSecondsAndMinutes from "@/utils/msToSecondsAndMinutes";

function TrackTableItem({ track }) {
  return (
    <tr className={styles.trackItem}>
      <td>
        <span>
          <RiPlayLine className={styles.play} />
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
      <td>{msToSecondsAndMinutes(track.duration_ms)}</td>
    </tr>
  );
}

export default TrackTableItem;
