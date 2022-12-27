import { useEffect } from "react";
import { useColor } from "@/lib/ColorContext";

import numberWithDots from "@/utils/numberWithDots";

import List from "@/components/organisms/List";
import ContentWrapper from "@/components/organisms/ContentWrapper";
import TrackTable from "@/components/organisms/TrackTable";

import ContentHeader from "@/components/organisms/ContentHeader";

function Artist({ artist, topTracks, albums, relatedArtists }) {
  const { getPredominantColor, predominantColor } = useColor();

  const artistImage = artist.images.length
    ? artist.images[0].url
    : noPicture.src;

  useEffect(() => {
    getPredominantColor(artistImage);
  }, [artistImage]);

  return (
    <>
      <ContentHeader
        image={artistImage}
        type="Artista"
        title={artist.name}
        subTitle={`${numberWithDots(artist.followers.total)} ouvintes mensais`}
      />
      <ContentWrapper addBackgroundColor={true}>
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
    </>
  );
}

export default Artist;
