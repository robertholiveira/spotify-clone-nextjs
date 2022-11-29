import ListItem from "@/components/molecules/ListItem";
import noPicture from "public/images/no-picture-artist.jpg";

function AlbumItem({ album }) {
  const albumImage = album.images.length ? album.images[0].url : noPicture.src;

  const getSubTitle = () => {
    const releaseDate = new Date(album.releaseDate);

    let albumType = "";
    if (album.album_type === "album") albumType = "Álbum";
    if (album.album_type === "single") albumType = "Single";
    if (album.album_type === "compilation") albumType = "Compilação";

    return `${releaseDate.getFullYear()} • ${albumType}`;
  };
  return (
    <ListItem
      image={albumImage}
      circleImage={false}
      link={`/dashboard/album/${album.id}`}
      title={album.name}
      subTitle={getSubTitle()}
    />
  );
}

export default AlbumItem;
