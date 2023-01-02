import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useSession } from "next-auth/react";

import { useColor } from "@/lib/ColorContext";

import numberWithDots from "@/utils/numberWithDots";

import Carrousel from "@/components/organisms/Carrousel";
import ContentWrapper from "@/components/organisms/ContentWrapper";
import TrackTable from "@/components/organisms/TrackTable";

import ContentHeader from "@/components/organisms/ContentHeader";
import { followArtist, unfollowArtist } from "@/services/spotify";

function Artist({ artist, topTracks, albums, relatedArtists }) {
  const { t } = useTranslation("artist");

  const { data: session } = useSession();

  const { getPredominantColor } = useColor();

  const [followed, setFollowed] = useState();

  const artistImage = artist.images.length
    ? artist.images[0].url
    : noPicture.src;

  useEffect(() => {
    setInterval(() => {
      getPredominantColor(artistImage);
    }, 100);
  }, [artistImage]);

  useEffect(() => {
    setFollowed(artist.followed);
  }, []);

  const handleFollowArtist = async () => {
    if (followed) {
      await unfollowArtist(session, artist.id);
      setFollowed(false);
    } else {
      await followArtist(session, artist.id);
      setFollowed(true);
    }
  };

  return (
    <>
      <ContentHeader
        image={artistImage}
        type={t("artist")}
        title={artist.name}
        subTitle={`${numberWithDots(artist.followers.total)} ${t(
          "monthlyListeners"
        )}`}
        button={{
          label: followed ? "Seguindo" : "Seguir",
          onClick: handleFollowArtist,
        }}
      />
      <ContentWrapper addBackgroundColor={true}>
        <TrackTable
          tracks={topTracks}
          title={t("popular")}
          showArtistName={false}
          showHeader={false}
        />
        <Carrousel items={albums} type="album" title={t("discography")} />
        <Carrousel items={relatedArtists} type="artist" title={t("related")} />
      </ContentWrapper>
    </>
  );
}

export default Artist;
