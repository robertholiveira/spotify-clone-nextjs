import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { useColor } from "@/lib/ColorContext";

import ContentWrapper from "@/components/organisms/ContentWrapper";
import TrackTable from "@/components/organisms/TrackTable";
import ContentHeader from "@/components/organisms/ContentHeader";
import numberWithDots from "@/utils/numberWithDots";
import { getPlaylistTracks } from "@/services/spotify";
import ButtonLoader from "@/components/atoms/ButtonLoader";

function Playlist({ playlist }) {
  const { data: session } = useSession();

  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { getPredominantColor } = useColor();

  const playlistImage = playlist.images.length
    ? playlist.images[0].url
    : noPicture.src;

  useEffect(() => {
    getPredominantColor(playlistImage);
  }, [playlistImage]);

  useEffect(() => {
    setTracks(playlist.tracks.items);
  }, []);

  const getSubTitle = () => {
    const ownerDisplayName = playlist.owner.display_name;
    const likes = numberWithDots(playlist.followers.total);
    const totalTracks = numberWithDots(playlist.tracks.total);

    return `${ownerDisplayName} • ${likes} curtidas •  ${totalTracks} músicas`;
  };

  const getPlaylistType = `Playlist ${playlist.public ? "pública" : "privada"}`;

  const loadMoreHandler = async () => {
    setIsLoading(true);
    let playlistTracks = await getPlaylistTracks(
      session,
      playlist.id,
      100,
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
        type={getPlaylistType}
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
