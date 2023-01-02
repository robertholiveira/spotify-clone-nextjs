import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

import { useColor } from "@/lib/ColorContext";

import Welcome from "@/components/atoms/Welcome";
import ContentWrapper from "@/components/organisms/ContentWrapper";
import Carrousel from "@/components/organisms/Carrousel";

function Home({ recentTracks, relatedArtists, featuredPlaylists, user }) {
  const { t } = useTranslation("home");

  const { getPredominantColor } = useColor();

  const image = recentTracks.length ? recentTracks[0].album.images[0].url : "";

  useEffect(() => {
    setInterval(() => {
      getPredominantColor(image);
    }, 100);
  }, []);

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
