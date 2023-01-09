import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";

import { useColor } from "@/lib/ColorContext";

import ContentWrapper from "@/components/organisms/ContentWrapper";
import TrackTable from "@/components/organisms/TrackTable";
import ContentHeader from "@/components/organisms/ContentHeader";
import numberWithDots from "@/utils/numberWithDots";
import { getPlaylistTracks } from "@/services/spotify";
import ButtonLoader from "@/components/atoms/ButtonLoader";

function Playlist({ playlist }) {
  const { t } = useTranslation("playlist");

  const { data: session } = useSession();

  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { changePredominantColor } = useColor();

  const playlistImage = playlist.images.length
    ? playlist.images[0].url
    : noPicture.src;

  useEffect(() => {
    setTimeout(() => {
      changePredominantColor(playlistImage);
    }, 100);
  }, [changePredominantColor, playlistImage]);

  useEffect(() => {
    setTracks(playlist.tracks.items);
  }, [setTracks, playlist]);

  const getSubTitle = () => {
    const ownerDisplayName = playlist.owner.display_name;
    const likes = numberWithDots(playlist.followers.total);
    const totalTracks = numberWithDots(playlist.tracks.total);

    return `${ownerDisplayName} • ${likes} ${t("likes")} •  ${totalTracks} ${t(
      "tracks"
    )}`;
  };

  const playlistType = playlist.public
    ? t("playlistType.public")
    : t("playlistType.private");

  const loadMoreHandler = async () => {
    setIsLoading(true);
    let playlistTracks = await getPlaylistTracks(
      session,
      playlist.id,
      playlist.tracks.limit,
      tracks.length
    );

    setTracks((prevTracks) => {
      return prevTracks.concat(playlistTracks);
    });
    setIsLoading(false);
  };

  const hasTotalTracks = () => {
    return playlist.tracks.total === tracks.length;
  };
  return (
    <>
      <ContentHeader
        image={playlistImage}
        title={playlist.name}
        subTitle={getSubTitle()}
        type={playlistType}
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

export default Playlist;
