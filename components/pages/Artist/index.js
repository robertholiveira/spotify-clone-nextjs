import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

import { useColor } from "@/lib/ColorContext";

import numberWithDots from "@/utils/numberWithDots";

import List from "@/components/organisms/List";
import ContentWrapper from "@/components/organisms/ContentWrapper";
import TrackTable from "@/components/organisms/TrackTable";

import ContentHeader from "@/components/organisms/ContentHeader";

function Artist({ artist, topTracks, albums, relatedArtists }) {
  const { t } = useTranslation("artist");

  const { getPredominantColor } = useColor();

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
        type={t("artist")}
        title={artist.name}
        subTitle={`${numberWithDots(artist.followers.total)} ${t(
          "monthlyListeners"
        )}`}
      />
      <ContentWrapper addBackgroundColor={true}>
        <TrackTable
          tracks={topTracks}
          title={t("popular")}
          showArtistName={false}
          showHeader={false}
        />
        <List items={albums} type="album" title={t("discography")} />
        <List items={relatedArtists} type="artist" title={t("related")} />
      </ContentWrapper>
    </>
  );
}

export default Artist;
