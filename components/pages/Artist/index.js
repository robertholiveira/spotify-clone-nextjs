import { useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";

import numberWithCommas from "@/utils/numberWithDots";
import { ContentWrapper, TrackTable } from "@/components";
import List from "@/components/organisms/List";
import styles from "./styles.module.scss";

function Artist({ artist, topTracks, albums }) {
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
    const getImageColor = async () => {
      let colorScheme = await fac.getColorAsync(artistImage);
      setImageColor(colorScheme.hex);
    };

    getImageColor();
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
          height: "1000px",
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
        </ContentWrapper>
      </div>
    </>
  );
}

export default Artist;
