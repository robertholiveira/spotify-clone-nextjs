import { useEffect } from "react";
import { useColor } from "@/lib/ColorContext";

import ContentWrapper from "@/components/organisms/ContentWrapper";
import TrackTable from "@/components/organisms/TrackTable";

import ContentHeader from "@/components/organisms/ContentHeader";

function Album({ album }) {
  const { getPredominantColor } = useColor();

  const albumImage = album.images.length ? album.images[0].url : noPicture.src;

  useEffect(() => {
    getPredominantColor(albumImage);
  }, [albumImage]);

  const getSubTitle = () => {
    const releaseDate = new Date(album.release_date);
    const artistName = album.artists[0].name;
    const totalTracks = album.total_tracks;

    return `${artistName} • ${releaseDate.getFullYear()}  •  ${totalTracks} músicas`;
  };

  const getAlbumType = () => {
    let albumType = "";
    if (album.album_type === "album") albumType = "Álbum";
    if (album.album_type === "single") albumType = "Single";
    return albumType;
  };

  return (
    <>
      <ContentHeader
        image={albumImage}
        title={album.name}
        subTitle={getSubTitle()}
        type={getAlbumType()}
      />
      <ContentWrapper addBackgroundColor={true}>
        <TrackTable
          tracks={album.tracks}
          showArtistName={true}
          showAlbumName={false}
          showAlbumImage={false}
        />
      </ContentWrapper>
    </>
  );
}

export default Album;
