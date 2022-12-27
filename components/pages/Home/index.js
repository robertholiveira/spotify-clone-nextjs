import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

import { useColor } from "@/lib/ColorContext";

import Welcome from "@/components/atoms/Welcome";
import ContentWrapper from "@/components/organisms/ContentWrapper";
import List from "@/components/organisms/List";

function Home({ recentTracks, relatedArtists, featuredPlaylists, user }) {
  const { t } = useTranslation("home");

  const { getPredominantColor } = useColor();

  const image = recentTracks.length ? recentTracks[0].album.images[0].url : "";

  useEffect(() => {
    getPredominantColor(image);
  }, []);

  return (
    <>
      <ContentWrapper addBackgroundColor={true}>
        <Welcome name={user.name} />
        <List items={recentTracks} type="track" title={t("recentlyPlayed")} />
        <List
          items={relatedArtists.items}
          type="artist"
          title={`${t("relatedArtists")} ${relatedArtists.name}`}
        />
        <List
          items={featuredPlaylists.playlists.items}
          type="playlist"
          title={`${t('trending')}: ${featuredPlaylists.message}`}
        />
      </ContentWrapper>
    </>
  );
}

export default Home;
