import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

import { useColor } from "@/lib/ColorContext";

import Welcome from "@/components/atoms/Welcome";
import ContentWrapper from "@/components/organisms/ContentWrapper";
import Carrousel from "@/components/organisms/Carrousel";

function Home({ recentTracks, relatedArtists, featuredPlaylists, user }) {
  const { t } = useTranslation("home");

  const { setPredominantColor } = useColor();

  useEffect(() => {
    const likedSongsColor = "#58449d";

    setTimeout(() => {
      setPredominantColor(likedSongsColor);
    }, 100);
  }, [setPredominantColor]);

  return (
    <>
      <ContentWrapper addBackgroundColor={true}>
        <Welcome name={user.name} />
        <Carrousel
          items={recentTracks}
          type="track"
          title={t("recentlyPlayed")}
        />
        <Carrousel
          items={relatedArtists.items}
          type="artist"
          title={`${t("relatedArtists")} ${relatedArtists.name}`}
        />
        <Carrousel
          items={featuredPlaylists.playlists.items}
          type="playlist"
          title={`${t("trending")} ${featuredPlaylists.message}`}
        />
      </ContentWrapper>
    </>
  );
}

export default Home;
