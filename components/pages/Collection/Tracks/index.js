import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";

import { useColor } from "@/lib/ColorContext";

import ContentWrapper from "@/components/organisms/ContentWrapper";
import TrackTable from "@/components/organisms/TrackTable";
import ContentHeader from "@/components/organisms/ContentHeader";
import numberWithDots from "@/utils/numberWithDots";
import { getUserTracks } from "@/services/spotify";
import ButtonLoader from "@/components/atoms/ButtonLoader";

import likedSongsImage from "@/public/images/liked-songs-cover.jpg";

function Tracks({ userTracks }) {
  const { t } = useTranslation("playlist");

  const { data: session } = useSession();

  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { setPredominantColor } = useColor();

  useEffect(() => {
    const likedSongsColor = "#58449d";
    setInterval(() => {
      setPredominantColor(likedSongsColor);
    }, 100);
  }, []);

  useEffect(() => {
    setTracks(userTracks.items);
  }, []);

  const getSubTitle = () => {
    if (!session) return;
    const ownerDisplayName = session.user.name;
    const totalTracks = numberWithDots(userTracks.total);

    return `${ownerDisplayName}  •  ${totalTracks} ${t("tracks")}`;
  };

  const loadMoreHandler = async () => {
    setIsLoading(true);
    let moreTracks = await getUserTracks(session, 50, tracks.length);

    setTracks((prevTracks) => {
      return prevTracks.concat(moreTracks.items);
    });
    setIsLoading(false);
  };

  const hasTotalTracks = () => {
    return userTracks.total === tracks.length;
  };
  return (
    <>
      <ContentHeader
        image={likedSongsImage.src}
        title={"Músicas curtidas"}
        subTitle={getSubTitle()}
        type={"Playlist"}
      />
      <ContentWrapper addBackgroundColor={true}>
        <TrackTable
          tracks={tracks}
          showArtistName={true}
          showAlbumName={true}
          showAlbumImage={true}
        />
        {!hasTotalTracks() && (
          <ButtonLoader isLoading={isLoading} onClick={loadMoreHandler} />
        )}
      </ContentWrapper>
    </>
  );
}

export default Tracks;
