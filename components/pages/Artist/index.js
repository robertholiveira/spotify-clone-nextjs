import { useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";

import numberWithCommas from "@/utils/numberWithDots";

import List from "@/components/organisms/List";
import ContentWrapper from "@/components/organisms/ContentWrapper";
import TrackTable from "@/components/organisms/TrackTable";

import styles from "./styles.module.scss";

function Artist({ artist, topTracks, albums, relatedArtists }) {
  const fac = new FastAverageColor();
  const [imageColor, setImageColor] = useState("");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () =>
      setOpacity((window.scrollY / window.innerHeight) * 5);
    window.removeEventListener("scroll", onScroll);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const getPredominantColor = async () => {
      let colorScheme = await fac.getColorAsync(artistImage);
      setImageColor(colorScheme.hex);
    };
    getPredominantColor();
  }, []);

  const artistImage = artist.images.length
    ? artist.images[0].url
    : noPicture.src;

  return (
    <>
      <div
        className={styles.artistImage}
        style={{ backgroundImage: `url(${artistImage})` }}
      >
        <div
          className={styles.backgroundColored}
          style={{ background: imageColor, opacity: opacity }}
        />
        <div className={styles.artistImageWrapper}>
          <h1 className={styles.artistName}>{artist.name}</h1>
          <span>
            {numberWithCommas(artist.followers.total)} ouvintes mensais
          </span>
        </div>
      </div>
      <div
        className={styles.artistContent}
        style={{
          background: `linear-gradient(0deg, transparent 70%, ${imageColor} 100%)`,
        }}
      >
        <ContentWrapper>
          <TrackTable
            tracks={topTracks}
            title="Populares"
            showArtistName={false}
            showHeader={false}
          />
          <List items={albums} type="album" title="Discografia" />
          <List
            items={relatedArtists}
            type="artist"
            title="Os fãs também curtem"
          />
        </ContentWrapper>
      </div>
    </>
  );
}

export default Artist;
