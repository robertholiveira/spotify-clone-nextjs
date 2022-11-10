import { Col } from "react-simple-flex-grid";

import styles from "./styles.module.scss";

import noPicture from "public/images/no-picture-artist.jpg";
import Link from "next/link";

function ArtistItem({ artist }) {
  const hasImage = artist.images.length;

  return (
    <Col span={2} className={styles.artistItem}>
      <div className={styles.artistItemWrapper}>
        <Link href={`/artist{${artist.id}}`}>
          <img src={hasImage ? artist.images[0].url : noPicture.src} />
          <span>{artist.name}</span>
        </Link>
      </div>
    </Col>
  );
}

export default ArtistItem;
