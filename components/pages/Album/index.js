import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

import { useColor } from "@/lib/ColorContext";

import ContentWrapper from "@/components/organisms/ContentWrapper";
import TrackTable from "@/components/organisms/TrackTable";

import ContentHeader from "@/components/organisms/ContentHeader";

function Album({ album }) {
  const { t } = useTranslation("album");

  const { changePredominantColor } = useColor();

  const albumImage = album.images.length ? album.images[0].url : noPicture.src;

  useEffect(() => {
    setTimeout(() => {
      changePredominantColor(albumImage);
    }, 100);
  }, []);

  const getSubTitle = () => {
    const releaseDate = new Date(album.release_date);
    const artistName = album.artists[0].name;
    const totalTracks = album.total_tracks;

    return `${artistName} • ${releaseDate.getFullYear()}  •  ${totalTracks} ${t(
      "tracks"
    )}`;
  };

  const albumType =
    album.album_type === "album" ? t("albumType.album") : t("albumType.single");

  return (
    <>
      <ContentHeader
        image={albumImage}
        title={album.name}
        subTitle={getSubTitle()}
        type={albumType}
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
