import { Row } from "react-simple-flex-grid";

import styles from "./styles.module.scss";

import { ArtistItem, Title } from "@/components";

function ArtistList({ artists, title }) {
  const hasArtists = artists && artists.length > 0;

  return (
    hasArtists && (
      <>
        <Title>{title}</Title>
        <Row gutter={40}>
          {artists.map((artist, index) => (
            <ArtistItem artist={artist} key={index} />
          ))}
        </Row>
      </>
    )
  );
}

export default ArtistList;
